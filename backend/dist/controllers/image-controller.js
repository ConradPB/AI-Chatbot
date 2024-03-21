import { generateImage } from '../config/image-config.js';
export const generateImageController = async (req, res) => {
    try {
        const images = await generateImage(req.body.prompt);
        res.json({ images });
    }
    catch (error) {
        console.error('Error in generateImageController:', error);
        res.status(500).json({ message: 'Failed to generate image' });
    }
};
//# sourceMappingURL=image-controller.js.map