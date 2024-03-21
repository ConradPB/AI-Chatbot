import { configureAi } from '../config/ai-config.js';
export const generateImage = async (req, res) => {
    const { description } = req.body;
    if (!description) {
        return res.status(400).json({ message: 'Description is required' });
    }
    try {
        const ai = configureAi();
        const response = await ai.createImage({
            prompt: description,
            n: 1, // Number of images to generate
            size: '1024x1024' // Image size
        });
        const imageUrl = response.data.data[0].url; // Assuming the response contains the URL of the generated image
        return res.status(200).json({ message: 'Image generated successfully', imageUrl });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to generate image', error: error.message });
    }
};
//# sourceMappingURL=image.js.map