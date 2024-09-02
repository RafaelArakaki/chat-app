import { useEffect, useState, useRef} from 'react';
import { socket } from '../../services/socket';
import ChatBar from "./components/chat-bar";
import ChatBody from "./components/chat-body";
import ChatFooter from "./components/chat-footer";
import ChatHeader from "./components/chat-header";
import type { SocketProps } from "../../../types/socket.d.ts"

const Chat = () => {
  const [messages, setMessages] = useState<Array<SocketProps>>([]);
  const [typingStatus, setTypingStatus] = useState<string>('');
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  });

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);  

  useEffect(() => {
    socket.on('typingResponse', (data) => setTypingStatus(data));
  }, [socket]);
  
  return (
    <div className="h-full flex justify-start">
      <ChatBar />
      <div className="flex flex-1 flex-col h-full ml-px">
        <ChatHeader />
        <ChatBody
          messages={messages}
          lastMessageRef={lastMessageRef}
          typingStatus={typingStatus}
        />
        <ChatFooter />
      </div>
    </div>
  )
}

export default Chat