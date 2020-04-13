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
            <i className="far fa-angry text-right " onClick={this.onClose}></i>

            <div className="text">Today's Numbers</div>

            <div className="row text-center">
              <div className="col-6 col-md-6">
                <div className="country-cardie case ">
                  {Intl.NumberFormat().format(this.props.todaycases)}
                </div>
                <div className="label-2 ">Cases</div>
              </div>

              <div className="col-6 col-md-6">
                <div className="country-cardie death">
                  {Intl.NumberFormat().format(this.props.todaydeaths)}
                </div>
                <div className="label-2 ">Deaths</div>
              </div>
            </div>

            <div className="mt-1 text">Total Numbers</div>

            <div className="row text-center">
              <div className="col-6 col-md-6">
                <div className="country-cardie  case">
                  {Intl.NumberFormat().format(this.props.cases)}
                </div>
                <span className="label-2 ">Cases</span>
              </div>

              <div className="col-6 col-md-6">
                <div className="country-cardie death">
                  {Intl.NumberFormat().format(this.props.deaths)}
                </div>

                <span className="label-2 ">Deaths</span>
              </div>

              <div className="col-6 col-md-6">
                <div className="country-cardie active">
                  {Intl.NumberFormat().format(this.props.active)}
                </div>
                <span className="label-2 ">Active</span>
              </div>

              <div className="col-6 col-md-6">
                <div className="country-cardie  recovered">
                  {Intl.NumberFormat().format(this.props.recovered)}
                </div>
                <span className="label-2 ">Recoveries</span>
              </div>
            </div>

            <div className="contain col-6 col-md-6 text-center">
              <div className="country-cardie critical">
                {Intl.NumberFormat().format(this.props.critical)}
              </div>
              <span className="label-2"> Critical</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Details;
