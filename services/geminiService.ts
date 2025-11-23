import { GoogleGenAI } from "@google/genai";
import { TOURS, CONTACT_INFO } from '../constants.ts';

// Inicialización perezosa para evitar fallos si faltan variables de entorno
let ai: GoogleGenAI | null = null;

const getAiClient = () => {
  if (ai) return ai;
  
  const apiKey = process.env.API_KEY || '';
  
  if (apiKey) {
      ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const generateChatResponse = async (userMessage: string, history: string[]) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey || apiKey === 'undefined' || apiKey === '') {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("⚠️ Modo Demo: Soy el asistente de Angelmó Tours. Necesito una API Key para funcionar completamente, pero puedo contarte que ofrecemos navegaciones por Isla Tenglo y tours a Petrohué. 🌧️🚢");
        }, 1000);
    });
  }

  try {
    const client = getAiClient();
    if (!client) throw new Error("Client initialization failed");

    const context = `
      Eres el asistente virtual experto de "Angelmó Tours", una agencia de turismo ubicada en la famosa zona de Angelmó, Puerto Montt, Chile.
      
      Tu objetivo es ayudar a los turistas a planificar sus paseos, vender navegaciones por la Isla Tenglo, tours a Saltos del Petrohué y Volcán Osorno.
      
      INFORMACIÓN DISPONIBLE:
      Servicios: ${JSON.stringify(TOURS)}
      Contacto: ${JSON.stringify(CONTACT_INFO)}
      
      REGLAS:
      1. Responde de manera amable, sureña y acogedora.
      2. Usa emojis relacionados con el mar, lluvia, barcos y naturaleza 🌧️🚢🌲🌋.
      3. Destaca la gastronomía de Angelmó si preguntan (mariscos, curanto).
      4. Si te preguntan precios, dálos en CLP.
      5. Si no sabes la respuesta, sugiere contactar por WhatsApp o ir al local en Angelmó.
      6. Mantén las respuestas bajo 100 palabras.
    `;

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: context,
        temperature: 0.7,
      }
    });

    return response.text || "La señal bajó por la lluvia. ¿Me lo repites?";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Lo siento, hubo un problema conectando con el servicio. Por favor verifica tu conexión.";
  }
};