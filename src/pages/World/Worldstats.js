import React from "react";
import Spinner from "../Spinner";

class Worldstats extends React.Component {
  intervalID;
  state = {
    cases: {},
  };

  componentDidMount() {
    this.getData();
  }
  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getData = () => {
    fetch("https://corona.lmao.ninja/all")
      .then((response) => response.json())
      .then((cases) => {
        this.setState({ cases });
        this.intervalID = setTimeout(this.getData.bind(this), 5000);
      });
  };

  render() {
    const cases = this.state.cases;
    let worldContent;
    let lengthCases = Object.keys(cases).length;

    if (lengthCases === 0) {
      worldContent = <Spinner />;
    } else if (lengthCases > 0) {
      worldContent = (
        <>
          <div className="navie head">Worldwide</div>

          <div className=" px-4 mt-2">
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <div className="cardie py-3 cases">
                  {Intl.NumberFormat().format(cases.cases)}
                </div>
                <div className="label case-label">Cases</div>
              </div>

              <div className="col-12 col-md-6 mb-3">
                <div className="cardie py-3 active">
                  {Intl.NumberFormat().format(cases.active)}
                </div>
                <div className="label  active-label">Active</div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <div className="cardie py-3 deaths">
                  {Intl.NumberFormat().format(cases.deaths)}
                </div>
                <div className="label  death-label">Deaths</div>
              </div>

              <div className="col-12 col-md-6 mb-3">
                <div className="cardie py-3 recovered">
                  {Intl.NumberFormat().format(cases.recovered)}
                </div>
                <div className="label  recovery-label">Recoveries</div>
              </div>
            </div>

            <div className="contain col-12 col-md-6 mb-3">
              <div className="">
                <div className="cardie py-3 countries">
                  {Intl.NumberFormat().format(cases.affectedCountries)}
                </div>
                <div className="label  country-label">Affected Countries</div>
              </div>
            </div>
          </div>
        </>
      );
    }

    return <>{worldContent}</>;
  }
}

export default Worldstats;
