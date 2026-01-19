import { GoogleGenerativeAI } from "@google/genai";

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Create a Gemini model instance
export const geminiModel = genAI.getGenerativeModel({ model: "gemini-pro" });

// Helper function to generate content
export async function generateContent(prompt: string) {
  try {
    const result = await geminiModel.generateContent(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    throw error;
  }
}
