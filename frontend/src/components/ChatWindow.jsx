import React, { useEffect, useRef } from 'react';
import { Phone, Video, MoreVertical, ArrowLeft } from 'lucide-react';
import { MessageBubble } from './MessageBubble';
import { MessageInput } from './MessageInput';

export const ChatWindow = ({
  chat,
  currentUser,
  onSendMessage,
  onBack
}) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat?.messages]);

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Welcome to Chat</h3>
          <p className="text-gray-600">Select a conversation to start messaging</p>
        </div>
      </div>
    );
  }

  const getChatInfo = () => {
    if (chat.isGroup) {
      return {
        name: chat.groupName || 'Group',
        avatar: chat.participants[1]?.avatar || '',
        isOnline: false,
        status: `${chat.participants.length} participants`
      };
    }
    
    const otherUser = chat.participants.find(p => p.id !== currentUser.id);
    return {
      name: otherUser?.name || '',
      avatar: otherUser?.avatar || '',
      isOnline: otherUser?.isOnline || false,
      status: otherUser?.isOnline ? 'online' : otherUser?.lastSeen || 'offline'
    };
  };

  const chatInfo = getChatInfo();

  return (
    <div className="flex-1 flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3 shadow-sm">
        <button
          onClick={onBack}
          className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="relative">
          <img
            src={chatInfo.avatar}
            alt={chatInfo.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          {chatInfo.isOnline && !chat.isGroup && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
          )}
        </div>
        
        <div className="flex-1">
          <h2 className="font-semibold text-gray-900">{chatInfo.name}</h2>
          <p className="text-sm text-gray-500">{chatInfo.status}</p>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Phone className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Video className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        {chat.messages.map((message, index) => {
          const isOwn = message.senderId === currentUser.id;
          const sender = isOwn 
            ? currentUser 
            : chat.participants.find(p => p.id === message.senderId);
          
          const showAvatar = !isOwn && chat.isGroup && (
            index === 0 || 
            chat.messages[index - 1].senderId !== message.senderId
          );

          return (
            <MessageBubble
              key={message.id}
              message={message}
              isOwn={isOwn}
              sender={sender}
              showAvatar={showAvatar}
            />
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
};