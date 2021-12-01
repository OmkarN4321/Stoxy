import React, { Component } from "react";
import ChartCard from "../components/ChartCard";
import { timeSeries } from "../api";

export class Home extends Component {
  state = {
    data1: this.props.s1,
    data2: this.props.s2,
    data3: this.props.s3,
  };

  data1 = this.state.data1
    .map((value) => {
      const val = {
        x: value.datetime,
        y: Number(value.close),
      };
      return val;
    })
    .reverse();

  data2 = this.state.data2
    .map((value) => {
      const val = {
        x: value.datetime,
        y: Number(value.close),
      };
      return val;
    })
    .reverse();

  data3 = this.state.data3
    .map((value) => {
      const val = {
        x: value.datetime,
        y: Number(value.close),
      };
      return val;
    })
    .reverse();

  render() {
    return (
      <div className="container">
        <div className="d-flex flex-row flex-wrap ">
          
          <ChartCard 
          data={this.data1}
          tickerName="Google"
          color="bg-success" 
          />

          <ChartCard
            data={this.data2}
            tickerName="Facebook"
            color="bg-danger"
          />

          <ChartCard
            data={this.data3}
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
  const s1 = await timeSeries("GOOG", 50);
  const s2 = await timeSeries("FB", 50);
  const s3 = await timeSeries("MSFT", 50);

  return {
    props: {
      s1: s1.values,
      s2: s2.values,
      s3: s3.values,
    },
  };
};

export default Home;
