import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Donut, Bar } from "britecharts-react";
import { with4Slices, with5bars } from "./Charts/data";


import colors from "britecharts/dist/umd/colors.min.js";
import tooltip from "britecharts/dist/umd/tooltip.min.js";

import "./css.css";

function App() {
  const logMouseOver = () => console.log('Mouse Over');
  return (
    <>
      <Donut data={with4Slices()} colorSchema={colors.colorSchemas.orange} 
                          height={500}
                          width={500}
                          externalRadius={500 / 2.5}
                          internalRadius={500 / 5}/>
      <Bar
        data={with5bars()}
        height={300}
        colorSchema={colors.colorSchemas.britecharts}
        enableLabels={false}
        labelsNumberFormat={""}
        width={500}
        isAnimated={true}

        customMouseOver={logMouseOver}
        customMouseMove={logMouseOver}
        customMouseOut={logMouseOver}
      />
    </>
  );
}

export default App;
