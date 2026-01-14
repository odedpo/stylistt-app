import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

const ANALYSIS_PROMPT = `You are a luxury fashion expert analyzing clothing items for a personal styling app called Stylistt.

Analyze this clothing image carefully and provide a detailed assessment. Return your analysis as valid JSON with these exact keys:

{
  "category": "One of: Tops, Bottoms, Outerwear, Dresses, Shoes, Accessories",
  "type": "Specific item type (e.g., 'Cashmere Crew Neck Sweater', 'High-Rise Wide-Leg Trousers')",
  "name": "A descriptive name for the closet (e.g., 'Navy Wool Blazer', 'Cream Silk Blouse')",
  "color": "Primary color",
  "colorFamily": "One of: warm, cool, neutral",
  "material": "Detected or estimated fabric/material",
  "styleTags": ["array", "of", "style", "tags"],
  "occasions": ["array", "of", "suitable", "occasions"],
  "seasons": ["array", "of", "appropriate", "seasons"],
  "brand": "Brand name if visible on label/tag, otherwise null",
  "qualityTier": "One of: luxury, contemporary, affordable",
  "stylingNotes": "2-3 sentences on how to style this piece, what it pairs well with, and when to wear it"
}

Style tags should include relevant descriptors like: minimalist, classic, bohemian, edgy, romantic, sporty, streetwear, preppy, glamorous, relaxed, structured, etc.

Occasions should include relevant options like: work, casual, evening, formal, weekend, date-night, travel, lounge, etc.

Seasons should include: spring, summer, fall, winter as appropriate.

Be specific and detailed in your analysis. If you cannot clearly see certain details, make educated estimates based on what is visible.

Return ONLY the JSON object, no additional text.`;

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
        const { image } = req.body;

        if (!image) {
            return res.status(400).json({ error: 'No image provided' });
        }

        // Extract base64 data and media type
        let imageData = image;
        let mediaType = 'image/jpeg';

        if (image.startsWith('data:')) {
            const matches = image.match(/^data:([^;]+);base64,(.+)$/);
            if (matches) {
                mediaType = matches[1];
                imageData = matches[2];
            }
        }

        // Call Claude Vision API
        const message = await anthropic.messages.create({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 1024,
            messages: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'image',
                            source: {
                                type: 'base64',
                                media_type: mediaType,
                                data: imageData,
                            },
                        },
                        {
                            type: 'text',
                            text: ANALYSIS_PROMPT,
                        },
                    ],
                },
            ],
        });

        // Parse the response
        const responseText = message.content[0].text;

        // Try to parse JSON from the response
        let analysis;
        try {
            // Handle case where response might have markdown code blocks
            const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/) ||
                              responseText.match(/```\s*([\s\S]*?)\s*```/);
            const jsonString = jsonMatch ? jsonMatch[1] : responseText;
            analysis = JSON.parse(jsonString.trim());
        } catch (parseError) {
            console.error('Failed to parse AI response:', responseText);
            return res.status(500).json({
                error: 'Failed to parse AI analysis',
                raw: responseText
            });
        }

        // Add metadata
        analysis.id = `item_${Date.now()}`;
        analysis.scannedAt = new Date().toISOString();
        analysis.aiConfidence = 0.92; // Placeholder confidence score

        return res.status(200).json(analysis);

    } catch (error) {
        console.error('Analysis error:', error);

        if (error.status === 401) {
            return res.status(500).json({ error: 'API key configuration error' });
        }

        return res.status(500).json({
            error: 'Failed to analyze item',
            message: error.message
        });
    }
}
