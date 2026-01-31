
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: '您好，我是智匯企業的工程 AI。您可以試著對我說：「幫我算一下 25 坪木工天花板的基本損耗量」。' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    // 安全地取得 API Key，避免 process 未定義導致崩潰
    const getApiKey = () => {
      try {
        if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
          return process.env.API_KEY;
        }
      } catch (e) {
        console.warn('Unable to access environment variables');
      }
      return '';
    };

    const apiKey = getApiKey();

    if (!apiKey) {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: '⚠️ 系統尚未配置 API Key。請確認環境變數設定後再試。' 
      }]);
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `你是「智匯企業有限公司」研發的工程專用 AI 大腦。
          1. 你的專業領域是：室內裝修、土木建築、水電消防、景觀工程。
          2. 你必須使用「工程驗算法」與「專業語義」來回答用戶。
          3. 如果用戶詢問報價或物料計算，請強調驗算法正在後端精確計算中。
          4. 說話風格：專業、嚴謹、簡潔。
          5. 語系：必須使用 繁體中文（台灣）。`,
          temperature: 0.7,
        },
      });

      const aiText = response.text || '目前無法處理您的請求，請稍後再試。';
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'ai', text: '連線異常，請確認網路設定或 API 額度。' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-demo" className="py-32 bg-slate-950 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">體驗 AI 工程大腦</h2>
          <p className="text-slate-400 text-lg font-light">透過專業語言算法，實現工地口語與結構化數據的即時轉化。</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden flex flex-col h-[600px] shadow-2xl shadow-cyan-500/10">
          <div className="p-6 bg-slate-800/50 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className="font-bold tracking-wider uppercase text-xs text-cyan-400">智匯 AI 即時分析中心</span>
            </div>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-6 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-2xl text-lg ${
                  msg.role === 'user' 
                    ? 'bg-cyan-600 text-white rounded-tr-none shadow-lg' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/50 p-5 rounded-2xl rounded-tl-none border border-slate-700 text-slate-400 italic flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                  正在應用工程驗算法...
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-slate-950/50 border-t border-slate-800">
            <div className="flex gap-4">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="請輸入您的工程需求..."
                className="flex-grow bg-slate-900 border border-slate-800 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-700"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="bg-white text-slate-950 font-black px-8 py-4 rounded-xl hover:bg-cyan-400 transition-all disabled:opacity-50 active:scale-95"
              >
                傳送
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChatDemo;
