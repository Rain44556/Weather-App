import "./App.css";
import Navbar from "./components/shared/Navbar";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F2EFE7] to-[#9ACBD0] dark:bg-gradient-to-r dark:from-[#2C3E50] dark:to-[#34495E] text-black shadow-md dark:text-gray-300">
      <Navbar></Navbar>
      <main>
        <Weather></Weather>
      </main>
    </div>
  );
}

export default App;
