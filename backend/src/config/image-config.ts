
import { Configuration, OpenAIApi } from 'openai';

export const generateImage = async (prompt: string): Promise<string[]> => {
  const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));
  
  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
    });
    
    // Assuming the API returns URLs directly
    return response.data.data.map((image: any) => image.url);
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
};
