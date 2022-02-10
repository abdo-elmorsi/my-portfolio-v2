import React from "react";
import "./App.css";
// import Index from "./pages/index"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Index = React.lazy(() => import("./pages/index"));

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Index />
    </div>
  );
}

export default App;
