import React from "react";

const BoxDisplay = ({ boxes }) => {


    return (
        <div>
            {
                boxes.map((val, i) =>
                    <div key={i} style={val.style}>
                        <p>Color: {val.color}</p>
                    </div>
                )
            }
        </div>
    )
}

export default BoxDisplay