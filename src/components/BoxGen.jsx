import React, { useState } from "react";

const BoxGen = ({ boxes, setBoxes }) => {

    const [color, setColor] = useState("");
    const [dimensions, setDimensions] = useState("");

    const formHandler = (e) => {
        e.preventDefault();
        setBoxes([
            ...boxes,
            {
                "color": color,
                "dimensions": dimensions,
                "style": {
                    "background": color,
                    "display": "inline-block",
                    "height": `${dimensions}px`
                }
            }
        ]);
        setColor("");
        setDimensions("");
    }
    const colorHandler = (e) => {
        setColor(e.target.value)
    }
    const dimensionHandler = (e) => {
        setDimensions(e.target.value)
    }

    return (
        <form onSubmit={formHandler}>
            <div>
                <label>Color</label>
                <input type="text" value={color} onChange={colorHandler} />
            </div>
            <div>
                <label>Dimensions</label>
                <input type="text" value={dimensions} onChange={dimensionHandler} />
            </div>
            <button>submit</button>
        </form>
    )
}

export default BoxGen