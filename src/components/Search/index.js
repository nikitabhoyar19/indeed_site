import React, { Component } from "react";
import "./Search.css";

export default class index extends Component {
  render() {
    return (
      <div className="main">
        <div className="PopularSearch">
          <div className="RecentSearch">
            <h2 className="RecentContent">Recent Searches</h2>

            <h2 class="RecentContentBox">Edit</h2>
          </div>

          <div className="SearchBoxes">
            <a class="JobSearchBoxBig" href="./">
              <p className="JobSearchContent">Online Typing</p>
              <span
                class="iconify JobSearchIcon"
                data-icon="bx:bx-chevron-right"
                data-inline="false"
              ></span>
            </a>
          </div>

          <div className="SearchBoxes">
            <a class="JobSearchBoxBig" href="./">
              <p className="JobSearchContent">Government</p>
              <span
                class="iconify JobSearchIcon"
                data-icon="bx:bx-chevron-right"
                data-inline="false"
              ></span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
