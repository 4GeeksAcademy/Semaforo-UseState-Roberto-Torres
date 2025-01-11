import React, { useState } from "react";
import Luces from "./Luz";


const Semaforo = () => {
    const [color, setColor] = useState("red");
    const [purple, setPurple] = useState(false);

    const changeRed = () => {
        setColor("red")
    }

    const changeYellow = () => {
        setColor("yellow")
    }

    const changeGreen = () => {
        setColor("green")
    }


    const alternateButton = () => {
        if (color === "red") {
            setColor("yellow");
        } else if (color === "yellow") {
            setColor("green");
        } else if (color === "green" && purple) {
            setColor("purple")
        } else {
            setColor("red")
        }
    }

    const addColor = () => {
        setPurple(true)
    }


    return (
        <div className="container">
            <div className="pole">

            </div>
            <div className={`row col-md-12 ${purple ? "change-traffic-light" : "trafficLight"}`}>

                <div className={`${color === "red" ? "changeRed" : "redLight"}`} onClick={changeRed}>
                    <Luces />
                </div>
                <div className={`${color === "yellow" ? "changeYellow" : "yellowLight"}`} onClick={changeYellow}>
                    <Luces />
                </div>
                <div className={`${color === "green" ? "changeGreen" : "greenLight"}`} onClick={changeGreen}>
                    <Luces />
                </div>
                {purple ? <div className={`${color === "purple" ? "changePurple" : "purpleLight"}`} onClick={changeGreen}>
                    <Luces />
                </div> : null}

            </div>
            <div>
                <div className="row col-md-12">
                    <button className="alternateButton" type="button" onClick={alternateButton}>Change Color</button>
                </div>
            </div>
            <div>
                <div className="row col-md-12">
                    <button className="alternateButton" type="button" onClick={addColor}>Add Color</button>
                </div>
            </div>
        </div>

    )
}

export default Semaforo;