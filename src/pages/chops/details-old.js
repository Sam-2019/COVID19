import React from "react";

import "./Dashboard.css";

class Details extends React.Component {
  onClose = () => {
    this.props.onClose();
  };

  render() {
    return (
      <>
        <div className="popup fadeIn">
          <i
            className="far fa-angry text-right pt-1 px-2"
            onClick={this.onClose}
          ></i>

          <div className="row px-3">
            <div className="col">
              <div className="col">{this.props.country}</div>
              <div className="col">Cases: {this.props.cases}</div>
              <div className="col">Today Cases: {this.props.todaycases}</div>
              <div className="col">Deaths: {this.props.deaths}</div>
              <div className="col">Today Deaths: {this.props.todaysdeaths}</div>
              <div className="col">Recovered: {this.props.recovered}</div>
              <div className="col">Active: {this.props.active}</div>
              <div className="col">Critical: {this.props.critical}</div>
              <div className="col">
                Cases Per 1million: {this.props.casesPerOneMillion}
              </div>
              <div className="col">
                Deaths Per 1million: {this.props.deathsPerOneMillion}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Details;
