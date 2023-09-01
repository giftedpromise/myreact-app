import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Search />
        <Weather />
      </header>
    </div>
  );
}

export default App;
