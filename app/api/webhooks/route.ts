import { type NextRequest, NextResponse } from "next/server"
import { Groq } from "@groq/groq"

// Initialize Groq client with API key from environment variables
const groqClient = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { source, formData } = body

    // Log the incoming webhook data
    console.log(`Webhook received from ${source}:`, formData)

    // Process with Groq to analyze the form data
    const enrichedData = await processWithGroq(formData, source)

    // Forward the enriched data to make.com
    const makeResponse = await forwardToMake(enrichedData, source)

    return NextResponse.json({
      success: true,
      message: "Webhook processed and forwarded to make.com",
      makeResponse,
    })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ success: false, message: "Webhook processing failed" }, { status: 500 })
  }
}

// Process the form data with Groq
async function processWithGroq(formData: any, source: string) {
  try {
    // Create a prompt based on the form source
    const prompt = createPromptForSource(formData, source)

    // Process with Groq
    const response = await groqClient.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [
        {
          role: "system",
          content: "You are an AI assistant that analyzes lead data to provide insights and categorization.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.5,
      max_tokens: 1024,
      response_format: { type: "json_object" },
    })

    // Parse the AI response
    const aiAnalysis = JSON.parse(response.choices[0].message.content || "{}")

    // Return the combined data (original form + AI analysis)
    return {
      leadData: formData,
      aiAnalysis,
      source,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    console.error("Error processing with Groq:", error)
    // If Groq processing fails, still return the original data
    return {
      leadData: formData,
      aiAnalysis: null,
      source,
      timestamp: new Date().toISOString(),
      error: "Failed to process with Groq",
    }
  }
}

// Create a prompt based on the form source
function createPromptForSource(formData: any, source: string): string {
  let basePrompt = `Analyze this ${source} form submission and provide insights about the lead's needs, potential fit for our services, and suggested follow-up actions. Format your response as JSON with fields: leadQuality (1-10), suggestedServices (array), followUpPriority (high/medium/low), and insights (text).`

  // Add source-specific instructions
  switch (source) {
    case "contact":
      basePrompt += " Focus on understanding their immediate needs and urgency."
      break
    case "hero":
      basePrompt += " Evaluate their potential as a high-value client."
      break
    case "newsletter":
      basePrompt += " Assess their interest level and content preferences."
      break
    case "booking":
      basePrompt += " Determine the best approach for their consultation."
      break
    case "get-started":
      basePrompt += " Identify the most suitable service package based on their business details."
      break
    case "affiliate":
      basePrompt += " Evaluate their potential as an affiliate partner."
      break
    case "career":
      basePrompt += " Assess their fit for the position and company culture."
      break
  }

  basePrompt += ` Lead data: ${JSON.stringify(formData)}`
  return basePrompt
}

// Forward the processed data to make.com
async function forwardToMake(data: any, source: string) {
  try {
    if (!process.env.MAKE_WEBHOOK_URL) {
      throw new Error("MAKE_WEBHOOK_URL environment variable is not set")
    }

    // Construct the webhook URL with the source as a parameter
    const webhookUrl = `${process.env.MAKE_WEBHOOK_URL}?source=${encodeURIComponent(source)}`

    // Send the data to make.com
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`make.com webhook failed with status: ${response.status}`)
    }

    const responseData = await response.json()
    console.log(`Successfully forwarded ${source} data to make.com`)
    return responseData
  } catch (error) {
    console.error(`Failed to forward ${source} data to make.com:`, error)
    throw error
  }
}
