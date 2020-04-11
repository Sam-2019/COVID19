import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from "./CountryStats";
import WorldStat from "./Worldstats";

import "./css.css";

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className="">
          <div className="container">
            <Route exact path="/" component={WorldStat} />
            <Route path="/country" component={Dashboard} />
          </div>
        </div>
      </Router>
    </>
  );
}

function Header() {
  return (
    <>
      <nav className="navbar  navbar-dark sticky-top shardow navie">
        <div className=" covid-head">COVID-19 Stats</div>

        <div className="mynav">
          <Link to="/" className=" text-sm-center  nav-link linkz">
            World
          </Link>
          <Link to="/country" className=" text-sm-center  nav-link linkz">
            Countries
          </Link>
          <span>
            <i className="fab fa-github git"></i>
          </span>
        </div>
      </nav>
    </>
  );
}

export default App;
