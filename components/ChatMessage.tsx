
import React from 'react';
import { Message, Role } from '../types';
import UserIcon from './icons/UserIcon';
import BotIcon from './icons/BotIcon';
import LoadingSpinner from './LoadingSpinner';

interface ChatMessageProps {
  message: Message;
  isLoading?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isLoading = false }) => {
  const isUser = message.role === Role.User;

  const containerClasses = `flex items-start gap-4 max-w-2xl mx-auto w-full ${isUser ? 'justify-end' : ''}`;
  const bubbleClasses = `px-5 py-3 rounded-2xl ${isUser ? 'bg-blue-600 rounded-br-none' : 'bg-gray-700 rounded-bl-none'}`;
  const textClasses = 'prose prose-invert prose-p:my-0 text-white whitespace-pre-wrap';

  const Icon = isUser ? UserIcon : BotIcon;
  const iconContainerClasses = `flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${isUser ? 'bg-blue-500' : 'bg-purple-500'}`;

  return (
    <div className={containerClasses}>
      {!isUser && (
        <div className={iconContainerClasses}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      )}
      <div className={bubbleClasses}>
        {isLoading && message.text === '' ? (
          <LoadingSpinner />
        ) : (
          <p className={textClasses}>{message.text}</p>
        )}
      </div>
      {isUser && (
        <div className={iconContainerClasses}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
