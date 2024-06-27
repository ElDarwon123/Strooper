import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Inicio.jsx";
import Game from "./components/Juego";
import Results from "./components/Results.jsx";
import Settings from "./components/Settings.jsx";

function App(){
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/results" element={<Results/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App