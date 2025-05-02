import "./App.css";
import Navbar from "./components/shared/Navbar";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Weather></Weather>
      </main>
    </div>
  );
}

export default App;
