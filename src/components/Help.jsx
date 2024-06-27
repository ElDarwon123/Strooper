import { Link } from "react-router-dom";
function Help(){
    return(
        <>
            <h1>Ayuda</h1>
            <p>Debes ver si el Nombre del color coincide con el color que tiene, entonces le das al oboton de correcta o incorrecta, dependiendo de tu respuesta 
                se almacena el resultado y luego verás tu puntaje
            </p>
            <Link to='/'>Volver al menu</Link>
        </>
    )
}