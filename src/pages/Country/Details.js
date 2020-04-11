import React from "react";

class Details extends React.Component {
  onClose = () => {
    this.props.onClose();
  };

  render() {
    return (
      <>
        <div className="container col-10 col-md-5 popup fadeIn  ">
          <img
            src={this.props.image}
            alt="pic"
            className="mx-auto d-block wo"
          ></img>
          <div className="mt-4">
          <i
            className="far fa-angry text-right "
            onClick={this.onClose}
          ></i>
          
          <div className="text">Today's Numbers</div>

          <div className="row">
            <div className="col-6 col-md-6">
              <div className="cardie4 caselabel ">{Intl.NumberFormat().format(this.props.todaycases)}</div>
              <div className="label4 ">Cases</div>
            </div>

            <div className="col-6 col-md-6">
              <div className="cardie4 deathlabel">{Intl.NumberFormat().format(this.props.todaydeaths)}</div>
              <div className="label4 ">Deaths</div>
            </div>
          </div>

          <div className="mt-1 text">Total Numbers</div>

          <div className="row text-center">
            <div className="col-6 col-md-6">
              <div className="cardie4  caselabel">{Intl.NumberFormat().format(this.props.cases)}</div>
              <span className="label4 ">Cases</span>
            </div>

            <div className="col-6 col-md-6">
              <div className="cardie4 deathlabel">{Intl.NumberFormat().format(this.props.deaths)}</div>

              <span className="label4 ">Deaths</span>
            </div>

            

            <div className="col-6 col-md-6">
              <div className="cardie4 activelabel">{Intl.NumberFormat().format(this.props.active)}</div>
              <span className="label4 ">Active</span>
            </div>



            <div className="col-6 col-md-6">
              <div className="cardie4  recoverylabel">{Intl.NumberFormat().format(this.props.recovered)}</div>
              <span className="label4 ">Recoveries</span>
            </div>
          </div>

          <div className="contain col-6 col-md-6 text-center">
            <div className="cardie4 criticallabel">
              {Intl.NumberFormat().format(this.props.critical)}
            </div>
            <span className="label4"> Critical</span>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Details;
