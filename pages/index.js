import React, { Component } from "react";
import ChartCard from "../components/ChartCard";
import { config, timeSeries, timeSeriesBatch } from "../api";

export class Home extends Component {
  state = {
    data1: Object.entries(this.props.s1),
    data2: Object.entries(this.props.s2),
    data3: Object.entries(this.props.s3),
  };

  data1 = this.state.data1.map(value => {
    const val = {
      x: value[0],
      y: Number(value[1]["4. close"])
    }
    return val 
  }).reverse()

  data2 = this.state.data2.map(value => {
    const val = {
      x: value[0],
      y: Number(value[1]["4. close"])
    }
    return val
  }).reverse()

  data3 = this.state.data3.map(value => {
    const val = {
      x: value[0],
      y: Number(value[1]["4. close"])
    }
    return val
  }).reverse()

  render() {
    return (
      <div className="container">
        <div className="d-flex flex-row flex-wrap ">
          <ChartCard
            data={this.data1.reverse()}
            tickerName="Google"
            color="bg-success"
          />

          <ChartCard
            data={this.data2.reverse()}
            tickerName="Facebook"
            color="bg-danger"
          />

          <ChartCard
            data={this.data3.reverse()}
            tickerName="Microsoft"
            color="bg-primary"
          />
          
          <style jsx global>{`
            .chart {
              height: 40vh;
              width: 24vw;
            }

            @media screen and (max-width: 800px) {
              .chart {
                height: 30vh;
                width: 85vw;
              }
            }
          `}</style>
        </div>
      </div>
    );
  }
}

export const getServerSideProps = async () => {
  const s1 = await timeSeries("GOOG")
  const s2 = await timeSeries("FB")
  const s3 = await timeSeries("MSFT")

  return {
    props: {
      s1: s1["Time Series (Daily)"],
      s2: s2["Time Series (Daily)"],
      s3: s3["Time Series (Daily)"]
    },
  };
};

export default Home;
