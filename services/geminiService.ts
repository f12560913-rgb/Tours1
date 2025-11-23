import { GoogleGenAI } from "@google/genai";
import { TOURS, CONTACT_INFO } from '../constants';

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateChatResponse = async (userMessage: string, history: string[]) => {
  try {
    const context = `
      Eres el asistente virtual experto de "PatagoniaCamper", una agencia de turismo y arriendo de campers en Puerto Natales y Torres del Paine, Chile.
      
      Tu objetivo es ayudar a los aventureros a planificar su viaje a la Patagonia, recomendar trekkings (como la Base Torres o la W), y explicar el arriendo de campers.
      
      INFORMACIÓN DISPONIBLE:
      Servicios: ${JSON.stringify(TOURS)}
      Contacto: ${JSON.stringify(CONTACT_INFO)}
      
      REGLAS:
      1. Responde de manera aventurera, útil y motivadora.
      2. Usa emojis relacionados con frío, montaña y camping 🏔️❄️🚐🔥.
      3. Ten en cuenta que el clima en Patagonia es impredecible, sugiérelo en tus respuestas.
      4. Si te preguntan precios, dálos en CLP.
      5. Si no sabes la respuesta, sugiere contactar por WhatsApp.
      6. Mantén las respuestas bajo 100 palabras.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: context,
        temperature: 0.7,
      }
    });

    return response.text || "El viento patagónico interfirió con mi señal. ¿Podrías repetir eso?";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Lo siento, no puedo conectar con el servidor base en este momento. Por favor llama a nuestro número de contacto.";
  }
};