import React, { Component } from "react";
import { advicer, overview, technicalIndicator, timeSeries } from "../api";
import StockData from "../components/StockData";

export class Stocks extends Component {
  state = {
    search: null,
    dema9: [],
    dema21: [],
    macd: [],
    data: [],
    details: null,
    count: 0,
    advice: null,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onToggle = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const dema9 = await technicalIndicator(this.state.search, "1day", 9, 6, "dema");
    const dema21 = await technicalIndicator(this.state.search, "1day", 21, 6, "dema");
    const macd_val = await technicalIndicator(this.state.search, "1day", 6, 6, "macd" );
    const details = await overview(this.state.search);
    const timeseries = await timeSeries(this.state.search);

    const data = Object.entries(timeseries["Time Series (Daily)"]).map(value => {
      const val = {
        x: value[0],
        y: Number(value[1]["4. close"])
      }
      return val 
    }).reverse()

    this.setState({
      dema9: dema9.values,
      dema21: dema21.values,
      macd: macd_val.values,
      details,
      data,
    });

    this.setState({
      advice: advicer(this.state.dema9, this.state.dema21, this.state.macd),
    });
    

    this.onToggle();
  };

  render() {
    return (
      <div className="container">
        <div className="mt-3 mx-4 ">
          <form className="d-flex ">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              onChange={this.onChange}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={this.onSubmit}
            >
              Search
            </button>
          </form>
        </div>
        {this.state.count !== 0 ? (
          <StockData
            data={this.state.data}
            details={this.state.details}
            name={this.state.count}
            advice={this.state.advice}
            dema9={this.state.dema9[0].dema}
            dema21={this.state.dema21[0].dema}
            macd={this.state.macd[0]}
          />
        ) : null}
      </div>
    );
  }
}

export default Stocks;
