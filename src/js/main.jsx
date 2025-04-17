import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

<div className = "row">
let conteo = 0;
setInterval(() => {
let primeraCasilla = Math.floor((conteo/1) %10);
let segundaCasilla = Math.floor((conteo/10) %10);

conteo ++;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home digUno = {primeraCasilla} digDos={segundaCasilla}/>
  </React.StrictMode>,
)
}, 1000);
</div>
