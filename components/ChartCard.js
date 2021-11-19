import React, { Component } from "react";
import Chart from "../components/Chart";

export class ChartCard extends Component {

  render() {
    return (
      <div className={`card  mx-2 my-2 shadow ${this.props.color} bg-gradient`}>
        <div className="card-body">
          <div className="chart">
            <Chart data={this.props.data} />
          </div>
          <h5 className="card-title ps-2">{this.props.tickerName}</h5>
        </div>
      </div>
    );
  }
}

export default ChartCard;
