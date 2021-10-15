import { StateProvider } from "./context/appContext";
import Home from "./Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <GlobalStyles />
        <Home />
      </div>
    </StateProvider>
  );
}

export default App;
