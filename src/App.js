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

        <small>
          <a
            href="https://github.com/wecodeschool/react-weather"
            target="_blank"
          >
            Open-source code
          </a>
          , by <a href="https://www.matdelac.io">Matt Delac</a> from
          <a href="https://shecodes.io/">She Codes</a>
        </small>
      </header>
    </div>
  );
}

export default App;
