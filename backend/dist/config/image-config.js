import { Configuration, OpenAIApi } from 'openai';
export const generateImage = async (prompt) => {
    const openai = new OpenAIApi(new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORGANIZATION_ID
    }));
    try {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: "1024x1024",
        });
        // Assuming the API returns URLs directly
        return response.data.data.map((image) => image.url);
    }
    catch (error) {
        console.error('Error generating image:', error);
        throw error;
    }
};
//# sourceMappingURL=image-config.js.map