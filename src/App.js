import "./App.css";
import Index from "./Components/index"
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <Index />
      <Toaster
          toastOptions={{
              duration: 5000,
          }}
      />
    </div>
  );
}

export default App;
