import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Donut, Bar } from "britecharts-react";
import { with4Slices, with5bars } from "./data";

import colors from "britecharts/dist/umd/colors.min.js";

function Chart() {
  return (
    <>
      <div className="container col-10 col-md-12 border"> Container
        <div className="row">
          <div className="col-12 col-md-5">
            <Donut
              data={with4Slices()}
              colorSchema={colors.colorSchemas.orange}
              height={330}
              width={300}
              internalRadius={400 / 5}
            />
          </div>
          <div className="col-12 col-md-7">
            <Bar
              data={with5bars()}
              height={330}
              colorSchema={colors.colorSchemas.britecharts}
              enableLabels={false}
              labelsNumberFormat={""}
         width={600}
              isAnimated={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
