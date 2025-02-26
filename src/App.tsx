import { Provider } from "./components/ui/provider";
import { CounterProvider } from "./context/CounterContext";
import Home from "./pages/home";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Provider>
      <CounterProvider>
        <Home />
        <Toaster />
      </CounterProvider>
    </Provider>
  );
}

export default App;
