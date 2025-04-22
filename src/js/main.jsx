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
let esReverso = false  
function cuentaRegresiva(numero) {
conteo = numero;
esReverso = true;
}


let contador = setInterval(() => {
let primeraCasilla = Math.floor((conteo/1) %10);
let segundaCasilla = Math.floor((conteo/10) %10);
let terceraCasilla = Math.floor((conteo/100) %10);
let cuartaCasilla = Math.floor((conteo/1000) %10);
let quintaCasilla = Math.floor((conteo/10000) %10);
let sextaCasilla = Math.floor((conteo/100000) %10);

if (esReverso === false){
  conteo ++;
} else{
  conteo --;
}




ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <Home digUno = {primeraCasilla} digDos={segundaCasilla} digTres = {terceraCasilla} digCuatro = {cuartaCasilla} digCinco = {quintaCasilla} digSeis = {sextaCasilla} cuentaRegresiva ={cuentaRegresiva} />
  </React.StrictMode>,
)
}, 1000);





