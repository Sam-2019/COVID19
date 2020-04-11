import React from "react";
import Details from "./Details";
import "./Dashboard.css";

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
      if (this.state.details) {
        return (
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
        ); }
        else {
          return (
            <>
             <div className="mt-2">
        <div key={this.props.country}>
          <div className="details p-3 mb-3 " >
            <div className="row ">
              <div className="col-3 text-center" >
                <img src={this.props.image} alt="flag" className="image"></img>
              </div>

              <div className="col text-left">
                <div id="country" onClick={this.DetailsOpen}>{this.props.country} </div>
              </div>
            </div>
          </div>
        </div>
        </div>
            </>
          )
        }
      }
}

export default View;
