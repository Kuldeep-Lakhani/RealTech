import React from "react";
import "../Greeting/Greeting.css"


function Greeting() {
    const currDate = new Date();
    const hours = currDate.getHours();
    let greeting = "";

    const cssStyle = {
        color: "lightgreen",
    }

    if (hours >= 1 && hours <= 12) {
        greeting = "Good Morning";
        cssStyle.color = "green";
    }
    else if (hours >= 12 && hours <= 16) {
        greeting = "Good Afternoon";
        cssStyle.color = "orange";
    }
    else if (hours >= 16 && hours <= 19) {
        greeting = "Good Evening";
        cssStyle.color = "red";
    }
    else {
        greeting = "Good Night";
        cssStyle.color = "black";

    }

    return (
        <div>
            <h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
        </div>
    )
}

export default Greeting;