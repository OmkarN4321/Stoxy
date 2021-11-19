import React, { Component } from "react";
import Script from 'next/script'
import Head from "next/head";

export class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Stox</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
        </Head>
        <main>{this.props.children}</main>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
      </div>
    );
  }
}

export default Layout;
