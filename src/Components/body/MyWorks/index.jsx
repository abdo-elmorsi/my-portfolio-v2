import React, { useState, useEffect } from "react";
import Header from "../header";
import Container from "../Container";
import Works from "./Works";
function MyWorks() {
  const [show, setShow] = useState("All");
  const Desc =
    "Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit amet. Duis ac elit vulputate, lobortis arcu quis, vehicula mauris.";
  return (
    <Container>
      <div className="text-white text-center border-gray-500 border-b-4 pb-20">
        <Header Name={"My Works"} Desc={Desc} />
        <Works />
      </div>
    </Container>
  );
}
export default MyWorks;
