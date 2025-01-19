import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/navigationBar/NavigationBar";
import { NavigationUIProvider } from "./contexts/NavigationUIContext";

function App() {
  return (
    <NavigationUIProvider>
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>
    </NavigationUIProvider>
  );
}

export default App;
