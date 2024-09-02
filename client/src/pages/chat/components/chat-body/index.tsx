import type { SocketProps } from "../../../../../types/socket";
import MessageBallon from "./components";

type ChatBodyProps = {
  messages: Array<SocketProps>,
  lastMessageRef: React.RefObject<HTMLDivElement>
  typingStatus: string,
}

const ChatBody = ({ messages, lastMessageRef, typingStatus }: ChatBodyProps) => {
  
  
  return (
    <div className="py-4 px-6 overflow-y-auto">
      {messages.map((message) => (
        <MessageBallon
          key={message.socketID}
          name={message.name}
          text={message.text}
        />
      ))}
      {typingStatus && (
        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
      )}
      
      <div ref={lastMessageRef} />
    </div>
  )
}

export default ChatBody;