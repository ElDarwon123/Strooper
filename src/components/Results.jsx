import { Link } from "react-router-dom";
function Results (){

    let correctas = localStorage.getItem('correctas')
    let incorrectas = localStorage.getItem('incorrectas')
    let results = localStorage.getItem('results')
    let resultados = []
    resultados = localStorage.getItem('listaRes')
    

    return(
        <>
            <h1>RESULTADOS</h1>
            <p>Puntaje: {results}</p>
            <p>Correctas: {correctas}</p>
            <p>Incorrectas: {incorrectas}</p>
            <p>Lista de Resultados: 
                {resultados}</p>
                <Link to='/'>Volver al menu</Link>
        </>
    )
}

export default Results