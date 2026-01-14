import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { image, action } = req.body;

        if (!image) {
            return res.status(400).json({ error: 'No image provided' });
        }

        // Extract base64 data
        let imageData = image;
        let mimeType = 'image/jpeg';

        if (image.startsWith('data:')) {
            const matches = image.match(/^data:([^;]+);base64,(.+)$/);
            if (matches) {
                mimeType = matches[1];
                imageData = matches[2];
            }
        }

        if (action === 'remove-background') {
            // Use Gemini to create a clean product shot
            const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

            const result = await model.generateContent([
                {
                    inlineData: {
                        mimeType: mimeType,
                        data: imageData
                    }
                },
                {
                    text: `Analyze this clothing item image. Describe the item in detail including:
                    - Type of garment
                    - Color
                    - Material/fabric appearance
                    - Style details

                    Then provide a prompt that could be used to generate a clean, professional product photo of this exact item on a pure white background, as if photographed in a professional studio.

                    Return as JSON: { "description": "...", "productPhotoPrompt": "..." }`
                }
            ]);

            const response = await result.response;
            const text = response.text();

            // Parse response
            let parsed;
            try {
                const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) ||
                                  text.match(/```\s*([\s\S]*?)\s*```/) ||
                                  text.match(/\{[\s\S]*\}/);
                const jsonString = jsonMatch ? (jsonMatch[1] || jsonMatch[0]) : text;
                parsed = JSON.parse(jsonString.trim());
            } catch (e) {
                parsed = { description: text, productPhotoPrompt: null };
            }

            return res.status(200).json({
                success: true,
                description: parsed.description,
                productPhotoPrompt: parsed.productPhotoPrompt,
                // For now, return original image - image generation requires Imagen
                cleanImage: image
            });

        } else if (action === 'generate-model') {
            // Generate a model wearing the item using Gemini's image generation
            const model = genAI.getGenerativeModel({
                model: 'gemini-2.0-flash-exp',
                generationConfig: {
                    responseModalities: ['Text', 'Image']
                }
            });

            const result = await model.generateContent([
                {
                    inlineData: {
                        mimeType: mimeType,
                        data: imageData
                    }
                },
                {
                    text: `Generate a high-fashion editorial photo of a stylish model wearing this exact clothing item.
                    The model should be posed elegantly against a minimal, clean background.
                    Style: luxury fashion magazine editorial, professional lighting, sophisticated.
                    Generate the image.`
                }
            ]);

            const response = await result.response;

            // Check if we got an image back
            let modelImage = null;
            let textResponse = '';

            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData) {
                    modelImage = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                } else if (part.text) {
                    textResponse = part.text;
                }
            }

            return res.status(200).json({
                success: true,
                modelImage: modelImage,
                description: textResponse
            });

        } else {
            return res.status(400).json({ error: 'Invalid action. Use "remove-background" or "generate-model"' });
        }

    } catch (error) {
        console.error('Image enhancement error:', error);
        return res.status(500).json({
            error: 'Failed to enhance image',
            message: error.message
        });
    }
}
