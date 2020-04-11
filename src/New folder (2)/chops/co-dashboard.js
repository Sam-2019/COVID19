import React from "react";

import "./Dashboard.css";

class Dashboard extends React.Component {
  intervalID;
  state = {
    cases: {}
  };

  componentDidMount() {
    this.getData();
  }
  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getData = () => {
    fetch("https://corona.lmao.ninja/all")
      .then(response => response.json())
      .then(cases => {
        this.setState({ cases });
        this.intervalID = setTimeout(this.getData.bind(this), 5000);
      });
  };

  render() {
    const cases = this.state.cases;
    console.log(cases);

    return (
      <div className=" container p-2 mb-2  col-11  text-center">
        <div className="head">COVID-19</div>
        <div className="head mb-2">Worldwide Stats</div>
        <div className="row">
          <div className="col-12 col-md mb-3">
            <div className="cardie py-3 cases">
              <div className="">{Intl.NumberFormat().format(cases.cases)}</div>
            </div>
            <div className="label case-label">Cases</div>
          </div>
          <div className="col-12 col-md mb-3">
            <div className="cardie py-3 active">
              <div className="">{Intl.NumberFormat().format(cases.active)}</div>
            </div>
            <div className="label  active-label">Active</div>
          </div>
          <div className="col-12 col-md mb-3">
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
