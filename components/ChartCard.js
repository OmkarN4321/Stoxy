import React, { Component } from "react";
import Chart from "../components/Chart";

export class ChartCard extends Component {
  render() {
    return (
      <div>
        {this.props.color === "green" ? (
          <div className={`card  mx-2 my-2 shadow bg-success bg-gradient`}>
            <div className="card-body">
              <div className="chart">
                <Chart data={this.props.data} />
              </div>
              <h5 className="card-title ps-2">{this.props.tickerName}</h5>
            </div>
          </div>
        ) : null}
        {this.props.color === "red" ? (
          <div className={`card  mx-2 my-2 shadow bg-danger bg-gradient`}>
            <div className="card-body">
              <div className="chart">
                <Chart data={this.props.data} />
              </div>
              <h5 className="card-title ps-2">{this.props.tickerName}</h5>
            </div>
          </div>
        ) : null}
        {this.props.color === "blue" ? (
          <div className={`card  mx-2 my-2 shadow bg-primary bg-gradient`}>
            <div className="card-body">
              <div className="chart">
                <Chart data={this.props.data} />
              </div>
              <h5 className="card-title ps-2">{this.props.tickerName}</h5>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ChartCard;
