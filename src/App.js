import { Routes, Route } from 'react-router-dom';
import "./App.css";

import { SocketProvider } from "./providers/socket";

import Homepage from "./pages/home";
import Roompage from "./pages/room";




function App() {
  return (
    <div className="App">
      <SocketProvider>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/room/:roomID" element={<Roompage/>} />
        </Routes>
      </SocketProvider>
    </div>
  ); 
}

export default App;