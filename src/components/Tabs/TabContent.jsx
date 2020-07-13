import React from "react";

const TabContent = ({ tabs, currTab }) => {


    return (
        <div class="content">
            {tabs[currTab].content}
        </div>
    );
}

export default TabContent;