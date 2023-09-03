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
            rel="noreferrer"
            href="https://github.com/giftedpromise/myreact-app"
            target="_blank"
          >
            Open-source code
          </a>
          , by{" "}
          <a href="https://github.com/giftedpromise/myreact-app">
            Promise Nwankwo
          </a>{" "}
          from
          <a href="https://shecodes.io/">She Codes</a>
        </small>
      </header>
    </div>
  );
}

export default App;
