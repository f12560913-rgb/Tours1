import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService.ts';
import { Message } from '../types.ts';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! 🏔️ Soy tu guía virtual de PatagoniaCamper. ¿Listo para planificar tu aventura en Torres del Paine?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const responseText = await generateChatResponse(userMsg, messages.map(m => m.text));
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, hubo un error de conexión. Inténtalo más tarde.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-accent hover:bg-amber-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="font-semibold hidden md:inline">Asistente Patagonia</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 flex flex-col border border-gray-200 overflow-hidden transition-all duration-300 h-[500px]">
          {/* Header */}
          <div className="bg-brand-dark p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <h3 className="font-bold">Patagonia AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user'
                    ? 'bg-action text-white self-end rounded-br-none'
                    : 'bg-white border border-gray-200 text-gray-800 self-start rounded-bl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="self-start bg-gray-100 p-3 rounded-2xl rounded-bl-none">
                <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregunta por trekkings..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-action text-sm"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-brand-dark text-white p-2 rounded-full hover:bg-slate-800 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;