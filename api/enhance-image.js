import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { action, outfitItems, occasion } = req.body;

        if (action === 'generate-outfit-model') {
            // Generate a model wearing a complete outfit
            if (!outfitItems || !Array.isArray(outfitItems) || outfitItems.length === 0) {
                return res.status(400).json({ error: 'No outfit items provided' });
            }

            // Build detailed outfit description
            const outfitDescription = outfitItems
                .map(item => {
                    const details = [];
                    if (item.color) details.push(item.color);
                    if (item.material) details.push(item.material);
                    if (item.type) details.push(item.type);
                    else if (item.name) details.push(item.name);
                    return details.join(' ');
                })
                .join(', ');

            const prompt = `Create a professional e-commerce fashion photo of a stylish model wearing this complete outfit: ${outfitDescription}.

The occasion is ${occasion || 'casual everyday wear'}.

Style requirements:
- Full body or 3/4 length shot
- Model posed elegantly and confidently
- Clean white studio background
- Professional fashion photography lighting
- High-end luxury fashion magazine aesthetic
- Sharp focus, high quality image`;

            console.log('Generating image with prompt:', prompt);

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-image',
                contents: prompt,
                config: {
                    responseModalities: ['Text', 'Image'],
                    imageConfig: {
                        aspectRatio: '3:4'
                    }
                }
            });

            console.log('Response received');

            let modelImage = null;
            let textResponse = '';

            // Process response parts
            if (response.candidates && response.candidates[0]?.content?.parts) {
                for (const part of response.candidates[0].content.parts) {
                    if (part.inlineData) {
                        modelImage = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                        console.log('Image found in response');
                    } else if (part.text) {
                        textResponse = part.text;
                    }
                }
            }

            // Alternative: check response.parts directly
            if (!modelImage && response.parts) {
                for (const part of response.parts) {
                    if (part.inlineData) {
                        modelImage = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                        console.log('Image found in response.parts');
                    } else if (part.text) {
                        textResponse = part.text;
                    }
                }
            }

            console.log('Model image generated:', modelImage ? 'yes' : 'no');

            return res.status(200).json({
                success: true,
                modelImage: modelImage,
                description: textResponse || `Generated outfit: ${outfitDescription}`
            });

        } else {
            return res.status(400).json({ error: 'Invalid action. Use "generate-outfit-model"' });
        }

    } catch (error) {
        console.error('Image enhancement error:', error);
        return res.status(500).json({
            error: 'Failed to enhance image',
            message: error.message
        });
    }
}
