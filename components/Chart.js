import React, { Component } from "react";
import { ResponsiveLine } from "@nivo/line";

export class Chart extends Component {
  state = {
    data: [
      {
        id: "nivo-chart",
        color: "hsl(11, 80%, 60%)",
        data: this.props.data,
      },
    ],
  };

  render() {
    return (
      <ResponsiveLine
        data={this.state.data}
        margin={{ top: 10, right: 20, bottom: 10, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
        }}
        curve="natural"
        axisBottom={null}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Price $",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors="white"
        theme={{
          textColor: "white",
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: "white",
                strokeWidth: 1,
              },
            },
          },
          grid: {
            line: {
              stroke: "black",
              strokeWidth: 1,
            },
          },
        }}
        motionConfig="stiff"
        pointSize={1}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableCrosshair={false}
        useMesh={true}
      />
    );
  }
}

export default Chart;
