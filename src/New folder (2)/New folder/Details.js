import React from "react";

class Details extends React.Component {
  onClose = () => {
    this.props.onClose();
  };

  render() {
    return (
      <>
        <div className="container col-10 col-md-6 popup fadeIn">
          <img
            src={this.props.image}
            alt="pic"
            className=" mx-auto d-block wo"
          ></img>
          <i
            className="far fa-angry text-right pt-1 px-2"
            onClick={this.onClose}
          ></i>

          <div className="mt-2 text">Today</div>

          <div className="row mt-1">
            <div className="col-6 col-md-">
              <div className="cardie2 case-label ">
                {Intl.NumberFormat().format(this.props.todaycases)}
              </div>
              <div className="label2 ">Cases</div>
            </div>

            <div className="col-6 col-md-6">
              <div className="cardie2 death-label">
                {Intl.NumberFormat().format(this.props.todaydeaths)}
              </div>
              <div className="label2 ">Deaths</div>
            </div>
          </div>

          <div className="mt-2 text">Overall Stats</div>

          <div className="row mt-1 " id="recovered">
            <div className="col-5 label3">Cases</div>
            <div className="col cardie3  case-label">
              {Intl.NumberFormat().format(this.props.cases)}
            </div>
          </div>

          <div className="row mt-2 " id="recovered">
            <div className="col-5 label3 ">Deaths</div>
            <div className="col cardie3  death-label">
              {Intl.NumberFormat().format(this.props.deaths)}
            </div>
          </div>

          <div className="row mt-2 " id="recovered">
            <div className="col-5 label3">Active</div>
            <div className="col cardie3 active-label">
              {Intl.NumberFormat().format(this.props.active)}
            </div>
          </div>

          <div className="row mt-2 " id="recovered">
            <div className="col-5 label3 ">Recoveries</div>
            <div className="col cardie3 recovery-label">
              {Intl.NumberFormat().format(this.props.recovered)}
            </div>
          </div>

          <div className="row mt-2 " id="recovered">
            <div className="col-5 label3">Critical</div>
            <div className="col cardie3 critical-label">
              {Intl.NumberFormat().format(this.props.critical)}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Details;
