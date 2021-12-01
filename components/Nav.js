import React, { Component } from "react";
import Link from "next/link";

export class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-2">
        <div className="container container-fluid">
          <Link href="/">
            <h2 className="text-white">STOXY</h2>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/stock_advice">
                  <a className="nav-link active">Stock Prediction</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
