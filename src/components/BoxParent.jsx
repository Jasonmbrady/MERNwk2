import React, { useState } from "react";
import BoxGen from "./BoxGen";
import BoxDisplay from "./BoxDisplay";

const BoxParent = (props) => {

    const [boxes, setBoxes] = useState([{
        "color": "blue",
        "dimensions": "100",
        "style": {
            "background": "blue",
            "display": "inline-block",
            "height": "100px"
        }
    }])
    return (
        <div>
            <BoxGen boxes={boxes} dimensions setBoxes={setBoxes} />
            <BoxDisplay boxes={boxes} />
        </div>
    )
}

export default BoxParent