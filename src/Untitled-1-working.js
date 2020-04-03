import React from "react";
import axios from "axios";

import "./Dashboard.css";

class Dashboard extends React.Component {
  intervalID;
  state = {
    cases: {
      cases: 935581,
      deaths: 47206,
      recovered: 194260,
      updated: 1585791451665,
      active: 694115,
      affectedCountries: 205
    },
    data: {}
  };

  componentDidMount() {
    this.getData();
  }
  componentWillUnmount() {
    /* stop
getData() from continuing to run even after unmounting this component. Notice we
are calling 'clearTimeout()` here rather than `clearInterval()` as in the
previous example. */

    clearTimeout(this.intervalID);
  }

  getData = () => {
    fetch("https://corona.lmao.ninja/all")
      .then(response => response.json())
      .then(data => {
        this.setState({ data }); // call getData() again in 5 seconds
        this.intervalID = setTimeout(this.getData.bind(this), 5000);
      });
  };

  render() {
    const cases = this.state.cases;
    const data = this.state.data;
    console.log(data);

    return (
      <div className=" container p-3 mb-2  col-10  text-center">
        <div className="head">COVID-19</div>
        <div className="head mb-2">Wordwide Stats</div>
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <div className="cardie p-3 cases">
              <div className="">{Intl.NumberFormat().format(cases.cases)}</div>
            </div>
            <div className="label case-label">Cases</div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="cardie py-3 active">
              <div className="">{Intl.NumberFormat().format(cases.active)}</div>
            </div>
            <div className="label  active-label">Active</div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="cardie py-3 deaths">
              <div className="">{Intl.NumberFormat().format(cases.deaths)}</div>
            </div>
            <div className="label  death-label">Deaths</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <div className="cardie py-3 recovered">
              <div className="">
                {Intl.NumberFormat().format(cases.recovered)}
              </div>
            </div>
            <div className="label  recovery-label">Recoveries</div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <div className="cardie py-3 countries">
              <div className="">
                {Intl.NumberFormat().format(cases.affectedCountries)}
              </div>
            </div>
            <div className="label  country-label">Affected Countries</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
