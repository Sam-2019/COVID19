import React from "react";
import Details from "./Details";
import "./Dashboard.css";

class View extends React.Component {
  state = {
    details: false
  };

  DetailsOpen = () => {
    this.setState({
      details: true
    });
  };

  DetailsClose = () => {
    this.setState({
      details: false
    });
  };
  render() {
    const cases = this.props.cases;
  
    return (
      <div className="mt-5">
        {cases.map(item => (
          <div key={item.countryInfo._id}>
            <div className="details p-3 mb-3 " onClick={this.DetailsOpen}>
              <div className="row">
                <div className="col-3">
                  <img src={item.countryInfo.flag} alt="flag"></img>
                </div>
                <div className="col-3">
                  <div id="country">{item.countryInfo._id}</div>
                </div>
                <div className="col">
                  <div id="country">{item.country}</div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {this.state.details ? (
          <Details
            onClose={this.DetailsClose}
            cases={cases}
 
          />
        ) : null}
      </div>
    );
  }
}

export default View;
