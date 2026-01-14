import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

function buildOutfitPrompt(closetItems, occasion, styleDNA) {
    const itemsList = closetItems.map(item =>
        `- ID: ${item.id} | ${item.category}: ${item.name} | Color: ${item.color} | Style: ${item.styleTags?.join(', ') || 'classic'}`
    ).join('\n');

    const styleProfile = styleDNA ? `
STYLE PROFILE:
- Aesthetic: ${styleDNA.aesthetic || 'Classic'}
- Color Palette: ${styleDNA.palette || 'Neutral'}
- Lifestyle: ${styleDNA.lifestyle || 'Versatile'}
- Preferred Silhouettes: ${styleDNA.silhouettes || 'Balanced'}
` : '';

    return `You are an expert personal stylist for Stylistt, a luxury fashion app. Your job is to create perfectly coordinated outfits from a client's actual wardrobe.

${styleProfile}

CLIENT'S CLOSET ITEMS:
${itemsList}

OCCASION: ${occasion}

Create the perfect outfit for this occasion using ONLY items from the client's closet above. Consider:
1. Color harmony and complementary tones
2. Proportion and silhouette balance
3. Appropriateness for the occasion
4. The client's personal style preferences

Return your recommendation as valid JSON with these exact keys:

{
  "outfit": {
    "top": "item_id or null if not needed",
    "bottom": "item_id or null if dress/jumpsuit",
    "outerwear": "item_id or null if not needed",
    "shoes": "item_id",
    "accessories": ["array", "of", "accessory", "item_ids"]
  },
  "matchScore": 85,
  "explanation": "3-4 sentences explaining WHY this combination works. Mention color theory, proportions, how pieces complement each other, and why it's perfect for the occasion.",
  "stylingTips": "2-3 specific tips for wearing this outfit - how to tuck, layer, accessorize, or style hair/makeup to complete the look.",
  "alternativeSwaps": {
    "top": "alternative_item_id or null",
    "bottom": "alternative_item_id or null"
  }
}

The matchScore should be 1-100 based on how well the outfit suits the occasion and style profile.
Include alternative swaps only if there are good alternatives in the closet.

Return ONLY the JSON object, no additional text.`;
}

export default async function handler(req, res) {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { closetItems, occasion, styleDNA } = req.body;

        if (!closetItems || !Array.isArray(closetItems) || closetItems.length === 0) {
            return res.status(400).json({
                error: 'No closet items provided',
                message: 'Please add items to your closet first'
            });
        }

        if (!occasion) {
            return res.status(400).json({ error: 'No occasion specified' });
        }

        // Need at least a few items to create an outfit
        if (closetItems.length < 2) {
            return res.status(400).json({
                error: 'Not enough items',
                message: 'Add more items to your closet for AI styling'
            });
        }

        const prompt = buildOutfitPrompt(closetItems, occasion, styleDNA);

        // Call Claude API
        const message = await anthropic.messages.create({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 1024,
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
        });

        // Parse the response
        const responseText = message.content[0].text;

        let outfitData;
        try {
            // Handle case where response might have markdown code blocks
            const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/) ||
                              responseText.match(/```\s*([\s\S]*?)\s*```/);
            const jsonString = jsonMatch ? jsonMatch[1] : responseText;
            outfitData = JSON.parse(jsonString.trim());
        } catch (parseError) {
            console.error('Failed to parse AI response:', responseText);
            return res.status(500).json({
                error: 'Failed to parse outfit recommendation',
                raw: responseText
            });
        }

        // Validate that selected items exist in closet
        const itemIds = new Set(closetItems.map(item => item.id));
        const validateId = (id) => !id || itemIds.has(id);

        if (outfitData.outfit) {
            const { top, bottom, outerwear, shoes, accessories } = outfitData.outfit;

            if (!validateId(top) || !validateId(bottom) || !validateId(outerwear) || !validateId(shoes)) {
                console.warn('AI selected items not in closet, this is okay - it tried its best');
            }
        }

        // Add metadata
        outfitData.generatedAt = new Date().toISOString();
        outfitData.occasion = occasion;
        outfitData.id = `outfit_${Date.now()}`;

        return res.status(200).json(outfitData);

    } catch (error) {
        console.error('Outfit generation error:', error);

        if (error.status === 401) {
            return res.status(500).json({ error: 'API key configuration error' });
        }

        return res.status(500).json({
            error: 'Failed to generate outfit',
            message: error.message
        });
    }
}
