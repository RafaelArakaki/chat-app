import { socket } from '../../../../services/socket';
import { FormEvent } from "react";
import { Send } from 'lucide-react';

const ChatFooter = () => {

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const message = data.get('message')?.toString();
    
    if (message?.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    event.currentTarget.reset();
  };

  const handleTyping = () =>
    socket.emit('typing', `${localStorage.getItem('userName')} escrevendo...`);

  return (
    <div className="w-full mt-auto bg-slate-300 py-4 px-6">
      <form className="flex justify-start items-center gap-4" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Escreva a sua mensagem"
          name="message"
          className="
          rounded-md
          border
          border-slate-300
          focus:border-slate-400
          hover:border-slate-400
          w-full
          p-1
          text-sm"
          onKeyDown={handleTyping}
        />
        <button><Send /></button>
      </form>
    </div>
  )
}

export default ChatFooter;