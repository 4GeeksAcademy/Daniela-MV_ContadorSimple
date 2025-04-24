import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';



let conteo = 0;

const root =  ReactDOM.createRoot(document.getElementById('root'))

const userInput = prompt("Colaca un número:")
  setInterval(() => {
    let primeraCasilla = Math.floor((conteo / 1) % 10);
    let segundaCasilla = Math.floor((conteo / 10) % 10);
    let terceraCasilla = Math.floor((conteo / 100) % 10);
    let cuartaCasilla = Math.floor((conteo / 1000) % 10);
    let quintaCasilla = Math.floor((conteo / 10000) % 10);
    let sextaCasilla = Math.floor((conteo / 100000) % 10);

   root.render(
      <React.StrictMode>
        <Home digUno={primeraCasilla} digDos={segundaCasilla} digTres={terceraCasilla} digCuatro={cuartaCasilla} digCinco={quintaCasilla} digSeis={sextaCasilla}/>
      </React.StrictMode>
    )
    if (conteo === parseInt(userInput)) {
      alert("Haz llegado a ${userInput}")
    }
    conteo ++;
  }, 1000);













