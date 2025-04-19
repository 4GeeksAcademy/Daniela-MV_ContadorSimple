import React from "react";

let Cronometro = (props) => {
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

            {/* <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
                <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
            </div> */}


        </div>
    )
};

export default Cronometro;