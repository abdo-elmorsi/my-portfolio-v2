import "./App.css";
import Index from "./pages/index"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Index />
    </div>
  );
}

export default App;
