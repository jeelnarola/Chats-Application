import React, { useState } from 'react';
import { Search, MoreVertical } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

export const ChatSidebar = ({
  chats,
  currentUser,
  selectedChatId,
  onChatSelect
}) => {
  console.log(chats);
  const {logout}=useAuthStore()

  // const [searchQuery, setSearchQuery] = useState('');

  // const filteredChats = chats.filter(chat => {
  //   const chatName = chat.isGroup 
  //     ? chat.groupName || 'Group'
  //     : chat.participants.find(p => p.id !== currentUser.id)?.name || '';
  //   return chatName.toLowerCase().includes(searchQuery.toLowerCase());
  // });

  // const formatTime = (date) => {
  //   const now = new Date();
  //   const diff = now.getTime() - date.getTime();
  //   const hours = diff / (1000 * 60 * 60);

  //   if (hours < 1) return 'now';
  //   if (hours < 24) return `${Math.floor(hours)}h`;
  //   if (hours < 48) return 'yesterday';
  //   return date.toLocaleDateString();
  // };

  // const getChatInfo = (chat) => {
  //   if (chat.isGroup) {
  //     return {
  //       name: chat.groupName || 'Group',
  //       avatar: chat.participants[1]?.avatar || '',
  //       isOnline: false
  //     };
  //   }

  //   const otherUser = chat.participants.find(p => p.id !== currentUser.id);
  //   return {
  //     name: otherUser?.name || '',
  //     avatar: otherUser?.avatar || '',
  //     isOnline: otherUser?.isOnline || false
  //   };
  // };
const handelLogout = () =>{
logout();
}
  return (
    <div className="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 bg-emerald-500 text-white">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Chats</h1>
          <button className="p-2 hover:bg-emerald-600 rounded-full transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        {/* <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search chats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent placeholder-white/70 text-white"
          />
        </div> */}
      </div>

      {/* Chat List */}
      {/* <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat) => {
          const chatInfo = getChatInfo(chat);
          const isSelected = chat.id === selectedChatId;
          
          return (
             <div
               key={chat.id}
               onClick={() => onChatSelect(chat.id)}
               className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 ${
                 isSelected ? 'bg-emerald-50 border-r-4 border-r-emerald-500' : ''
               }`}
             > 
              
              <div className="relative flex-shrink-0 mr-3">
                <img
                  src={chatInfo.avatar}
                  alt={chatInfo.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {chatInfo.isOnline && !chat.isGroup && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-gray-900 truncate">
                    {chatInfo.name}
                  </h3>
                  <span className="text-xs text-gray-500 flex-shrink-0">
                    {chat.lastMessage && formatTime(chat.lastMessage.timestamp)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 truncate">
                    {chat.lastMessage?.content || 'No messages yet'}
                  </p>
                  {chat.unreadCount > 0 && (
                    <div className="flex-shrink-0 ml-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-emerald-500 rounded-full">
                        {chat.unreadCount}
                      </span>
                    </div>
                  )}
                </div>
              </div>
             </div>
          );
        })}
      </div> */}


      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {
          chats.map((item, index) => {
            console.log(item.fullName);

            return (
              <div
                key={item._id}
                className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 
                }`}
              >

                <div className="relative flex-shrink-0 mr-3">
                  {item.profilePic ? (
                    <img
                      src={item.profilePic}
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold text-lg">
                      {item.fullName?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  {/* {chatInfo.isOnline && !chat.isGroup && (
                   <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                 )} */}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-gray-900 truncate">
                      {item.fullName}
                    </h3>
                    <span className="text-xs text-gray-500 flex-shrink-0">
                      {item.lastMessage && formatTime(item.lastMessage.timestamp)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">
                      {item.lastMessage?.content || 'No messages yet'}
                    </p>
                    {item.unreadCount > 0 && (
                      <div className="flex-shrink-0 ml-2">
                        <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-emerald-500 rounded-full">
                          {item.unreadCount}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <button
        className="mb-10 ml-2 p-2 bg-red-800 w-[100px] text-white rounded-md cursor-pointer"
        onClick={handelLogout}
      >
        LogOut
      </button>
    </div>
  );
};