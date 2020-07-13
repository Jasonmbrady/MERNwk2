import React, { useState } from "react";
import TabHeader from "./TabHeader";
import TabContent from "./TabContent";
import './Tabs.css';

const Tabs = (props) => {
    const [tabs, setTabs] = useState([
        {
            "label": "Tab 1",
            "content": "This is the content for Tab 1"
        },
        {
            "label": "Tab 2",
            "content": "This is the content for Tab 2"
        },
        {
            "label": "Tab 3",
            "content": "This is the content for Tab 3"
        }

    ]);
    const [currTab, setCurrTab] = useState("1");

    return (
        <div>
            <TabHeader tabs={tabs} setCurrTab={setCurrTab} />
            <TabContent tabs={tabs} currTab={currTab} />
        </div>
    );
}

export default Tabs;