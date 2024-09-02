import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate("/");
    window.location.reload();
  }

  return (
    <div className="flex justify-end bg-slate-300 py-3 px-5">
      <button
        className="
        rounded-md
        bg-red-700
        text-red-200
        text-sm
        font-semibold
        py-1
        px-7"
        onClick={() => handleLeaveChat()}
      >
        Sair do chat
      </button>
    </div>
  )
}

export default ChatHeader;