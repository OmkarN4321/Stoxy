import React, { Component } from "react";
import ChartCard from "../components/ChartCard";

export class StockData extends Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex flex-row flex-wrap mt-3">
          <div className="flex-grow-1 card prediction mx-2 my-2 shadow bg-dark">
            <div className="card-body">
              <h4 className="text-white">Prediction</h4>
              <p className="card-text text-white display-2">
                {this.props.advice}
              </p>
            </div>
          </div>

          <ChartCard
            key={this.props.name}
            data={this.props.data}
            tickerName=""
            color="red"
          />
          <style jsx global>{`
            .chart {
              height: 60vh;
              width: 60vw;
            }

            @media screen and (max-width: 800px) {
              .chart {
                height: 30vh;
                width: 85vw;
              }
            }
          `}</style>
        </div>

        <div className="flex-grow-1 card mx-2 my-2 shadow bg-dark">
          <div className="card-body  text-white">
            <div className="details ">
              <h4>Details</h4>
              <div className="overview my-3">
                <h5>Overview</h5>
                <p>{this.props.details["Description"]}</p>
              </div>
            </div>
            <h5>Financial ratios</h5>
            <div className="financial-ratios d-flex flex-row flex-wrap technical justify-content-between my-3">
              <h6>PE : {this.props.details["PERatio"]}</h6>
              <h6>EBITDA : {this.props.details["EBITDA"]}</h6>
              <h6>EPS : {this.props.details["EPS"]}</h6>
              <h6>BETA : {this.props.details["Beta"]}</h6>
              <h6>ROE : {this.props.details["ReturnOnEquityTTM"]}</h6>
            </div>
            <h5 className="mb-2">Technical Indicators</h5>
            <div className="technical d-flex flex-row flex-wrap justify-content-between my-3">
              <h6>DEMA 9 : {this.props.dema9}</h6>
              <h6>DEMA 21 : {this.props.dema21}</h6>
              <h6>MACD : {this.props.macd.macd}</h6>
              <h6>MACD SIGNAL : {this.props.macd.macd_signal}</h6>
              <h6>ANALYST TARGET : {this.props.details["AnalystTargetPrice"]}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StockData;
