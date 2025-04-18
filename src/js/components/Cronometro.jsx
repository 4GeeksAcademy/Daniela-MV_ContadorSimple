import React from "react";

let Cronometro = (props)=> {
    return (
    <div className="container text-center">
        <div className="row bg-dark" style={{ width: "70rem", height: "10rem"}}>
            <div className="col fs-1 text-warning">
                <i className="bi bi-stopwatch"></i>
            </div>
            <div className="col fs-1 text-warning">
                {props.digSeis}
            </div>
            <div className="col fs-1 text-warning">
                {props.digCinco}
            </div>
            <div className="col fs-1 text-warning">
                {props.digCuatro}
            </div>
            <div className="col fs-1 text-warning">
                {props.digTres}
            </div>
            <div className="col fs-1 text-warning">
                {props.digDos}
            </div>
            <div className="col fs-1 text-warning">
                {props.digUno}
            </div>
        </div>
    </div>
    )
}

export default Cronometro;