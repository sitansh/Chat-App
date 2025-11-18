
import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { Chat } from '@google/genai';
import { Message, Role } from '../types';
import { startChat } from '../services/geminiService';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';

const ChatPage: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const chatRef = useRef<Chat | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const initializeChat = useCallback(() => {
    try {
      chatRef.current = startChat();
    } catch (e) {
      if (e instanceof Error) {
        setError(`Initialization failed: ${e.message}`);
      } else {
        setError("An unknown error occurred during initialization.");
      }
      console.error(e);
    }
  }, []);

  useEffect(() => {
    initializeChat();
  }, [initializeChat]);


  const handleSendMessage = async (userInput: string) => {
    if (isLoading || !userInput.trim()) return;
    if (!chatRef.current) {
      setError("Chat is not initialized. Please refresh the page.");
      return;
    }

    setIsLoading(true);
    setError(null);

    const userMessage: Message = { role: Role.User, text: userInput };
    setChatHistory(prev => [...prev, userMessage]);

    try {
      const stream = await chatRef.current.sendMessageStream({ message: userInput });

      let modelResponse = '';
      setChatHistory(prev => [...prev, { role: Role.Model, text: '' }]);

      for await (const chunk of stream) {
        modelResponse += chunk.text;
        setChatHistory(prev => {
          const newHistory = [...prev];
          newHistory[newHistory.length - 1] = { role: Role.Model, text: modelResponse };
          return newHistory;
        });
      }
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        setError(`Failed to get response: ${errorMessage}`);
        console.error(e);
        // remove the empty model message if an error occurs
        setChatHistory(prev => prev.filter((_, i) => i !== prev.length -1 || prev[prev.length-1].text !== ''));

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <main ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {chatHistory.length === 0 && !isLoading && (
            <div className="flex justify-center items-center h-full">
                <div className="text-center text-gray-500">
                    <p className="text-2xl font-semibold">Gemini Chat</p>
                    <p>Start a conversation by typing below.</p>
                </div>
            </div>
        )}
        {chatHistory.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
        {isLoading && chatHistory[chatHistory.length - 1]?.role === Role.User && (
            <ChatMessage message={{ role: Role.Model, text: '' }} isLoading={true} />
        )}
      </main>
      <footer className="bg-gray-800/50 backdrop-blur-sm border-t border-gray-700 p-4 md:p-6">
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </footer>
    </div>
  );
};

export default ChatPage;
