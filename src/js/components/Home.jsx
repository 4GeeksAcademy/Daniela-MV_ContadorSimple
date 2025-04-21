import React from "react";

//include images into your bundle


//create your first component
const Home = (props) => {
    

    return (
        <div className="container text-center">
            <div className="row bg-dark" style={{ width: "70rem", height: "10rem" }}>
                <div className="col text-warning" style={{ fontSize: "90px" }}><i className="bi bi-stopwatch"></i></div>
                <div className="col text-warning" style={{ fontSize: "80px" }} >{props.digSeis}</div>
                <div className="col text-warning" style={{ fontSize: "80px" }}>{props.digCinco}</div>
                <div className="col text-warning" style={{ fontSize: "80px" }}>{props.digCuatro}</div>
                <div className="col text-warning" style={{ fontSize: "80px" }}>{props.digTres}</div>
                <div className="col text-warning" style={{ fontSize: "80px" }}>{props.digDos}</div>
                <div className="col text-warning" style={{ fontSize: "80px" }}>{props.digUno}</div>
            </div>
            
            
            <form className="formulario">
                    <p><b>Ingresa un Número:</b></p>
                    <input type="text" name="number" id="numero"/>
                        <button type="button" className="btn btn-warning" id="enviar">{props.button}Inicio</button>
            </form>
        </div>
    )
};

export default Home;