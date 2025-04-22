import React from "react";

//include images into your bundle


//create your first component
const Home = (props) => {


    return (
        
        <div className="container text-center bg-warning-subtle">
            <div className="row bg-dark" style={{ width: "70rem", height: "10rem" }}>
                <div className="col text-warning" style={{ fontSize: "90px" }}><i className="bi bi-stopwatch"></i></div>
                <div className="col text-warning" style={{ fontSize: "80px" }} >{props.digSeis}</div>
                <div className="col text-warning" style={{ fontSize: "80px" }}>{props.digCinco}</div>
                <div className="col text-warning" style={{ fontSize: "80px" }}>{props.digCuatro}</div>
                <div className="col text-warning" style={{ fontSize: "80px" }}>{props.digTres}</div>
                <div className="col text-warning" style={{ fontSize: "80px" }}>{props.digDos}</div>
                <div className="col text-warning" style={{ fontSize: "80px" }}>{props.digUno}</div>
            </div>

            <div className="d-flex justify-content-between mt-5">
                <form className="formulario">
                    <p><b>Ingresa un Número:</b></p>
                    <input type="number" name="number" id="numero" onKeyDown={(e) => {
                        if (e.key == "Enter"){
                            props.cuentaRegresiva(Number(e.target.value))
                        }
                    }} />
                    
                </form>

                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger"><i class="bi bi-play-btn fs-3"></i></button>
                    <button type="button" className="btn btn-warning"><i class="bi bi-pause-btn fs-3"></i></button>
                    <button type="button" className="btn btn-success"><i class="bi bi-stop-btn fs-3"></i></button>
                </div>
            </div>
        </div>
    )
};

export default Home;