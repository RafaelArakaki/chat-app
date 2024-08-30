import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import { socket } from './services/socket';
import Home from './pages/home';
import Chat from './pages/chat';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
