import React, { Component } from "react";
import CanvasJSReact from "./assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = [

  { x: 1, y: 10 },
  { x: 2, y: 13 },
  { x: 3, y: 18 },
  { x: 4, y: 20 },
  { x: 5, y: 17 },
  { x: 6, y: 10 },
  { x: 7, y: 13 },
  { x: 8, y: 18 },
  { x: 9, y: 20 },
  { x: 10, y: 17 }
]; //dataPoints.

class LineChart extends Component {
  constructor() {
    super();
  }

  render() {
    const options = {
      title: {
        text: "Dynamic Line Chart"
      },
      data: [
        {
          type: "line",
          dataPoints: dps
        }
      ]
    };

    return (
      <div>
        <CanvasJSChart options={options} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default LineChart;
