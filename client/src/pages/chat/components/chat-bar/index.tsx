import { MessageCircleMore  } from 'lucide-react';
import { useEffect, useState } from 'react';
import { socket } from '../../../../services/socket';
import type { SocketProps } from '../../../../../types/socket';

const ChatBar = () => {

  const [users, setUsers] = useState<Array<SocketProps>>([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  console.log(users)
  return (
    <div className="h-full bg-slate-300 w-60 p-3">
      <h2 className="font-semibold text-slate-600 mb-4">Usuários ativos</h2>
      {users.map((user) => (
        <div
          className="flex justify-start items-center gap-2 text-slate-600"
          key={user.socketID}
        >
          <MessageCircleMore size={20} /> {user.name}
        </div>
      ))}
      
    </div>
  )
}

export default ChatBar;