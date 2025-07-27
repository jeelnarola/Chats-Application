import React from 'react';
import { Check, CheckCheck } from 'lucide-react';

export const MessageBubble = ({
  message,
  isOwn,
  sender,
  showAvatar = false
}) => {
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getStatusIcon = () => {
    switch (message.status) {
      case 'sent':
        return <Check className="w-4 h-4 text-gray-400" />;
      case 'delivered':
        return <CheckCheck className="w-4 h-4 text-gray-400" />;
      case 'read':
        return <CheckCheck className="w-4 h-4 text-emerald-500" />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex items-end gap-2 mb-4 ${isOwn ? 'justify-end' : 'justify-start'}`}>
      {!isOwn && showAvatar && (
        <img
          src={sender.avatar}
          alt={sender.name}
          className="w-8 h-8 rounded-full object-cover flex-shrink-0"
        />
      )}
      
      <div className={`max-w-xs md:max-w-md lg:max-w-lg ${isOwn ? 'order-1' : 'order-2'}`}>
        <div
          className={`px-4 py-2 rounded-2xl shadow-sm ${
            isOwn
              ? 'bg-emerald-500 text-white rounded-br-md'
              : 'bg-white border border-gray-200 text-gray-800 rounded-bl-md'
          }`}
        >
          <p className="text-sm leading-relaxed break-words">{message.content}</p>
        </div>
        
        <div className={`flex items-center gap-1 mt-1 ${isOwn ? 'justify-end' : 'justify-start'}`}>
          <span className="text-xs text-gray-500">
            {formatTime(message.timestamp)}
          </span>
          {isOwn && getStatusIcon()}
        </div>
      </div>
      
      {isOwn && showAvatar && (
        <img
          src={sender.avatar}
          alt={sender.name}
          className="w-8 h-8 rounded-full object-cover flex-shrink-0 order-2"
        />
      )}
    </div>
  );
};