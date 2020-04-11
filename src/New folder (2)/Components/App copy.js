import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import LineChart from "./Line Chart";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </div>
      </nav>

      <div>
        <LineChart />
      </div>
    </div>
  );
}

export default App;
