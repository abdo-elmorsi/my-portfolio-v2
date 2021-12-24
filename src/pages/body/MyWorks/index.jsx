import React from "react";
import Header from "../../../Components/Headers";
import Works from "./Works";
function MyWorks() {
    // const Desc ="Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit amet. Duis ac elit vulputate, lobortis arcu quis, vehicula mauris.";
    return (
        <div id="My" className="text-white text-center pb-10">
            <Header Name={"My Works"} />
            <Works />
        </div>
    );
}
export default MyWorks;
