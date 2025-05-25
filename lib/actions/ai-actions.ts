"use server"

import { generateText } from "ai"
import { groqProvider, models, defaultSystemPrompt } from "../ai-config"

export async function generateAIResponse(prompt: string, systemPrompt: string = defaultSystemPrompt) {
  try {
    const response = await generateText({
      model: groqProvider(models.llama3),
      prompt,
      system: systemPrompt,
      temperature: 0.7,
      maxTokens: 1000,
    })

    return { success: true, text: response.text }
  } catch (error) {
    console.error("Error generating AI response:", error)
    return {
      success: false,
      text: "Sorry, I'm having trouble processing your request right now. Please try again later.",
    }
  }
}
