import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CountryStat from "./pages/Country/CountryStats";
import WorldStat from "./pages/World/Worldstats";
//import Chart from "./pages/Charts/Chart";

import logo2 from "./logo2.png";

import "./css/css.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/" component={WorldStat} />
          <Route path="/country" component={CountryStat} />
          {/* <Route path="/chart" component={Chart} /> */}
        </div>
      </Router>
    </>
  );
}

function Header() {
  return (
    <>
      <nav className="nav shadow-sm sticky-top shardow  ">
        <div className=" covid-head">
          <img src={logo2} alt="flag" className="covid"></img>
          COVID-19 Stats
        </div>

        <div className="mynav text-center ">
          <Link to="/" className="link">
            World
          </Link>
          <Link to="/country" className="link">
            Countries
          </Link>
          <Link to="/chart" className="link" hidden>
            Charts
          </Link>

          <a href="https://github.com/Sam-2019/COVID19">
            <i className="fab fa-github git"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default App;
