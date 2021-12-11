import React from "react";
import "./adminSideNav.css";
export default function AdminSideNave() {
  return (
    <div className="nk-sidebar">
      <div
        className="slimScrollDiv"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "auto",
          height: "100%",
        }}
      >
        <div
          className="nk-nav-scroll active"
          style={{ overflow: "hidden", width: "auto", height: "100%" }}
        >
          <ul className="metismenu in" id="menu">
            <li className="nav-label">Dashboard</li>
            <li className="">
              <a
                className="has-arrow"
                href={"javascript:void()"}
                aria-expanded="false"
              >
                <i className="icon-speedometer menu-icon"></i>
                <span className="nav-text">Dashboard</span>
              </a>
              <ul
                aria-expanded="false"
                className="collapse"
                style={{ height: "0px" }}
              >
                <li className="active">
                  <a href={"./"} className="active">
                    Home 1
                  </a>
                </li>
                <li>
                  <a href="./index-2.html">Home 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="has-arrow"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="icon-graph menu-icon"></i>
                <span className="nav-text">Charts</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="./chart-flot.html">Flot</a>
                </li>
                <li>
                  <a href="./chart-morris.html">Morris</a>
                </li>
                <li>
                  <a href="./chart-chartjs.html">Chartjs</a>
                </li>
                <li>
                  <a href="./chart-chartist.html">Chartist</a>
                </li>
                <li>
                  <a href="./chart-sparkline.html">Sparkline</a>
                </li>
                <li>
                  <a href="./chart-peity.html">Peity</a>
                </li>
              </ul>
            </li>
            <li className="nav-label">Table</li>
            <li>
              <a
                className="has-arrow"
                href="javascript:void()"
                aria-expanded="false"
              >
                <i className="icon-menu menu-icon"></i>
                <span className="nav-text">Table</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a href="./table-basic.html" aria-expanded="false">
                    Basic Table
                  </a>
                </li>
                <li>
                  <a href="./table-datatable.html" aria-expanded="false">
                    Data Table
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
