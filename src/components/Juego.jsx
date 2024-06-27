import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
let words = ["Amarillo", "Azul", "Naranja", "Negro", "Rojo", "Verde", "Purpura"];
let color = ["#FFFF00", "#333399", "#FF8234", "#000000", "#FF0000", "#008000", "#B31CBA"];

const getItem = (num) => {
  return Math.floor(Math.random() * num);
};

const getWord = () => {
  return words[getItem(words.length)];
};
const getColor = () => {
  return color[getItem(words.length)];
};

const results = (correcta, incorrecta) => {
    let total = 0;
    for (let i = 0; i < correcta; i++) {
      total = total + 5;
    }
    for (let i = 0; i < incorrecta; i++) {
      total = total - 3;
    }
    return total;
}



function Game() {
  const navigator = useNavigate();
  let time= 0;
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const [pal, setPal] = useState(getWord());
  const [col, setCol] = useState(getColor());

  const wordIndex = words.indexOf(pal);
  const colorIndex = color.indexOf(col);

  const isCorrect = () => {
    if (wordIndex === colorIndex) {
      setCorrect(correct + 1);
      setCol(getColor());
      setPal(getWord());
    } else {
      setIncorrect(incorrect + 1);
      setCol(getColor());
      setPal(getWord());
    }
  };

  const isIncorrect = () => {
    if (wordIndex != colorIndex) {
      setCorrect(correct + 1);
      setCol(getColor());
      setPal(getWord());
    } else {
      setIncorrect(incorrect + 1);
      setCol(getColor());
      setPal(getWord());
    }
  };

  const Tempo = ({ initTime, timeUp }) => {
    const [time, setTime] = useState(initTime);

    useEffect(() => {
      if (time > 0) {
        const timer = setTimeout(() => {
          setTime(time - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        timeUp(() => setTime(initTime));
      }
    }, [time, timeUp, initTime]);

    return(
        <>
        <h1>Tiempo Restasnte: {time}</h1>
        </>
    )
  };

  const handleTIme = ((reset) => {
    setIncorrect(incorrect + 1);
    setCol(getColor());
    setPal(getWord());
    reset();
  })

  let gameMode = localStorage.getItem("gameMode");


  if (gameMode == "normal") {
    time = 3;
  } else if (gameMode == "veterano") {
    time = 2;
  } else if (gameMode == "dios") {
    time = 1;
  } 

   let res = results(correct, incorrect)

   if (res <= 0){
    res = 0
   }

  if (correct + incorrect == 20){
    navigator('/results')
  }

  localStorage.setItem("correctas", correct);
  localStorage.setItem("incorrectas", incorrect);
  localStorage.setItem("results", res);
  let resultados = []
  resultados.push(res)
  localStorage.setItem('listaRes', resultados);
  
  

  return (
    <>
      
      <h1 style={{ color: col }}>{pal}</h1>
      <p>Correctas: {correct}</p>
      <p>Incorrectas: {incorrect}</p>
      <button
        type="submit"
        onClick={() => {
          isCorrect();
        }}
      >
        Correcta
      </button>
      <button
        type="submit"
        onClick={() => {
          isIncorrect();
        }}
      >
        Incorrecta
      </button>
      <Tempo initTime={time} timeUp={handleTIme} />
      <Link to='/'>Volver al menu</Link>
    </>
  );
}

export default Game;
