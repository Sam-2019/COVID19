import React from "react";
import { Donut, Legend } from "britecharts-react";
import { with4Slices } from "./data";


class LegendDonut extends React.PureComponent {

    constructor(props) {
      super(props);

      this.state = {highlightedSlice: null};
    }

    _handleMouseOver(data) {
      this.setState({
        highlightedSlice: data.data.id
      });
    }

    _handleMouseOut() {
      this.setState({
        highlightedSlice: 99999
      });
    }

    render() {
      const legendMargin = {
        top: 10,
        bottom: 10,
        left: 0,
        right: 30,
      };

      return (
          <div>
 
                  <Donut
                    data={with4Slices()}
                    height={400}
                    width={400}
                    externalRadius={400 / 2.5}
                    internalRadius={400 / 5}
                    isAnimated={false}
                    highlightSliceById={this.state.highlightedSlice}
                    customMouseOver={this._handleMouseOver.bind(this)}
                    customMouseOut={this._handleMouseOut.bind(this)}
                  />
                  <Legend
                    data={with4Slices()}
                    height={200}
                    width={400}
                    margin={legendMargin}
                    highlightEntryById={this.state.highlightedSlice}
                  />
                </div>
         

      );
    }
  }

  export default LegendDonut;;