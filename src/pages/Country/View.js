import React from "react";
import Details from "./Details";

class View extends React.Component {
  state = {
    details: false,
  };

  DetailsOpen = () => {
    this.setState({
      details: true,
    });
  };

  DetailsClose = () => {
    this.setState({
      details: false,
    });
  };

  // Close dropdown when click outside
  handleClick = () => {
    if (this.state.details) {
      this.setState({ details: !this.state.details });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  render() {
    return (
      <div className="container col-10 col-md-6 mt-2 ">
        
      <div key={this.props.country}>
        <div className="details mb-3 ">
          <div className="row ">
            <div className="col-3 text-center">
              <img src={this.props.image} alt="flag" className="image"></img>
            </div>

            <div className="col text-left">
              <span id="country" onClick={this.DetailsOpen}>
                {this.props.country}
              </span>
            </div>
          </div>
        </div>
      </div>

        {this.state.details ? (
          <Details
            id={this.props.id}
            image={this.props.image}
            country={this.props.country}
            cases={this.props.cases}
            todaycases={this.props.todaycases}
            deaths={this.props.deaths}
            todaydeaths={this.props.todaydeaths}
            recovered={this.props.recovered}
            active={this.props.active}
            critical={this.props.critical}
            casesPerOneMillion={this.props.casesPerOneMillion}
            deathsPerOneMillion={this.props.deathsPerOneMillion}
            onClose={this.DetailsClose}
          />
        ) : null}
      </div>
    );
  }
}

export default View;
