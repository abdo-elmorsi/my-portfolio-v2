import React from "react";
import Header from "../Helpers/Headers/header";
import Works from "./Works";
function MyWorks() {
    const Desc =
        "Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit amet. Duis ac elit vulputate, lobortis arcu quis, vehicula mauris.";
    return (
        <div id="My" className="text-white text-center">
            <Header Name={"My Works"} Desc={Desc} />
            <Works />
        </div>
    );
}
export default MyWorks;
