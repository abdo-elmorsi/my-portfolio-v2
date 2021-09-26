import "./App.css";
import Index from "./Components/index"
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <Index />
      <Toaster
          toastOptions={{
              duration: 6000,
          }}
      />
    </div>
  );
}

export default App;
