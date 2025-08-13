import React, { useEffect, useState, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const scrollRef = useRef(null);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(30) + ' 🚀',
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, [dispatch]);

  // Scroll to bottom when new message added
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages]);
  

  return (
    <div className="w-full flex flex-col rounded-lg border border-gray-200 overflow-hidden bg-white shadow-md">
      {/* Header */}
      <div className="flex text-left items-center  px-8 py-3 bg-white border-b border-gray-200">
        <h3 className="font-semibold text-sm text-center">Live Chat</h3>
      </div>

      {/* Chat Scroll Area */}
      <div
        ref={scrollRef}
        className="h-[400px] overflow-y-auto px-4 py-2 flex flex-col gap-2"
      >
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
         

        ))}
       

      </div>

      {/* Form */}
      <form
        className="flex items-center gap-3 px-4 py-3 border-t border-gray-200 bg-white"
        onSubmit={(e) => {
          e.preventDefault();
          if (!liveMessage.trim()) return;
          dispatch(addMessage({ name: 'Sangram Yadav', message: liveMessage }));
          setLiveMessage('');
        }}
      >
        <input
          className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-sm"
          type="text"
          placeholder="Send a message..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 text-white text-sm px-4 py-2 rounded-full hover:bg-green-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
