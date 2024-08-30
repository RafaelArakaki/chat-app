import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get('name')?.toString();

    if (name) {
      localStorage.setItem('userName', name);
      navigate('/chat');
    }    
  }

  return (
    <div className="bg-chat h-full flex justify-center items-center">
      <form onSubmit={handleSubmit}
        className="w-80 bg-white rounded-md shadow-2xl shadow-slate-600 p-4"
      >
        <h2 className="font-semibold mb-3">Entrar no Chat</h2>
        <input
          className="
          rounded-md
          border
          border-slate-300
          focus:border-slate-400
          hover:border-slate-400
          w-full
          p-1
          text-sm
          mb-3"
          placeholder="Seu nome"
          name="name"
        />
        <button
          className="
          rounded-md
          bg-lime-500
          text-lime-900
          text-sm
          font-semibold
          py-1
          px-7"
        >
          Entrar
        </button>
      </form>
    </div>
    
  )
}

export default Home;