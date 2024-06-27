import { useState } from "react"
import { Link } from "react-router-dom";
function Settings(){

    const [gameMode, setGameMode] = useState('normal')

    localStorage.setItem('gameMode', gameMode)

    return(
        <>
            <h1>Settings</h1>
            <p>Dificultades y tiempos: </p>
            <p>Normal = 3 segundos</p>
            <p>Veterano = 2 segundos</p>
            <p>Dios = 1 segundos</p>
            <button style={{margin: 10}} onClick={() => setGameMode("normal")}>Dificultad Normal</button>
            <button style={{margin: 10}} onClick={() => setGameMode("veterano")}>Dificultad Veterano</button>
            <button style={{margin: 10}} onClick={() => setGameMode("dios")}>Dificultad Dios</button>
            <Link to='/'>Volver al menu</Link>  
        </>
        
    )
}

export default Settings