import React from 'react'
import { useState } from 'react';
// import { userGet } from '../store/userGet';
import { useEffect } from 'react';
import { useChatStore } from '../store/useChatStore';
import Sidebar from '../components/Sidebar';
import NoChatSelected from '../components/NoChatSelected';
import ChatContainer from '../components/ChatContainer';
const users = [
  { name: "Jeel", online: true },
  { name: "Rutvi", online: false },
  { name: "Raj", online: true },
  { name: "Aarav", online: false },
];

const messages = [
  { sender: "Jeel", text: "Hey! What's up?", time: "10:01 AM", status: "seen" },
  { sender: "You", text: "All good. You?", time: "10:03 AM", status: "delivered" }, // "sent", "delivered", or "seen"
];
function Home() {
  const {getUsers,users} = useChatStore()
    const [chats, setChats] = useState([]);
 const { selectedUser } = useChatStore();

  useEffect(() => {
  getUsers(); // fetch users on component mount
}, []);

useEffect(() => {
  if (users) {
    setChats(users); // only when isUser is available
  }
}, [users]);
console.log("Users :- ",users);

  return (
    <>
      <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home