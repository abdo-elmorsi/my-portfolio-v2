import React, { Suspense } from 'react'
import ReactDOM from "react-dom";
import "./index.css";
import Loader from "./Helpers/Loader.js";
const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
