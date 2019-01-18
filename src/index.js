import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import IpAddressContainer from "./IpAddressContainer";

var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <IpAddressContainer/>
    </div>,
    destination
);
