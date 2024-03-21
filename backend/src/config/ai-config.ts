import { Configuration, OpenAIApi } from "openai";

export const configureAi = () => {
    const config = new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORGANIZATION_ID,
    });

    const openAi = new OpenAIApi(config);
    return openAi;
};
