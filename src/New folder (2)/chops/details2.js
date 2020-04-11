import React from "react";
import one from "./one.jpg";

import "./Dashboard.css";

class Details2 extends React.Component {
  render() {
    return (
      <>
        <div className="popup fadeIn">
          <img src={one} alt="pic" className=" mx-auto d-block wo"></img>
          <i className="far fa-angry text-right pt-1 px-2"></i>

          <div className="mt-2 text">Today</div>

          <div className="row mt-1">
            <div className="col-6 col-md-4">
              <div className="cardie2 case-label ">11,000,000,000</div>
              <div className="label2 ">Cases</div>
            </div>

            <div className="col-6 col-md-4">
              <div className="cardie2 death-label">11,000,000,000</div>
              <div className="label2 ">Deaths</div>
            </div>
          </div>

          <div className="mt-2 text">Overall Stats</div>

          <div className="row mt-1 " id="recovered">
            <div className="col-5 label3">Cases</div>
            <div className="col cardie3  case-label">11,000,000,000</div>
          </div>

          <div className="row mt-2 " id="recovered">
            <div className="col-5 label3 ">Deaths</div>
            <div className="col cardie3  death-label">11,000,000,000</div>
          </div>

          <div className="row mt-2 " id="recovered">
            <div className="col-5 label3">Active</div>
            <div className="col cardie3 active-label">11,000,000,000</div>
          </div>

          <div className="row mt-2 " id="recovered">
            <div className="col-5 label3 ">Recoveries</div>
            <div className="col cardie3 recovery-label">
              11,000,000,000
            </div>
          </div>

          <div className="row mt-2 " id="recovered">
            <div className="col-5 label3">Critical</div>
            <div className="col cardie3 critical-label">
              11,000,000,000
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Details2;
