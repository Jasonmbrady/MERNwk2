import React from "react";

const TabHeader = ({ tabs, setCurrTab }) => {

    const clickHandler = (e, i) => {
        setCurrTab(i);
    }

    return (
        <div>
            {
                tabs.map((val, i) =>
                    <div key={i} onClick={(e) => clickHandler(e, i)} className="headbox">
                        <h2>{val.label}</h2>
                    </div>
                )
            }
        </div>
    );
}

export default TabHeader;