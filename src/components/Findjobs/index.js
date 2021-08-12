import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import "./Findjobs.css";

// rcc
export class index extends Component {
  render() {
    return (
      <>
        {/* overall-container */}
        <div className="job-container">
          {/* search Section */}
          <div className="search-container">
            {/* what section */}
            <div className="job-search-container what-job">
              <h2 className="headcontent">What</h2>
              <span className="smallcontent">
                Job title, keywords, container
              </span>
              <div className="search-box">
                <form>
                  <TextField
                    className="outlined-basic"
                    label="job title, keyword or company"
                    variant="outlined"
                  />
                </form>
              </div>
            </div>

            {/* where section */}
            <div className="job-search-container where-job">
              <h2 className="headcontent">Where</h2>
              <span className="smallcontent">City, state, or pin code</span>
              <div className="search-box">
                <form>
                  <TextField
                    className="outlined-basic"
                    label="City, state, or pin code"
                    variant="outlined"
                  />
                </form>
              </div>
            </div>

            {/* btn-section */}
            <div className="btn-container">
              <div className="findbtn">
                <Button className="findbtn" variant="contained" color="primary">
                  <span className="whiteSec">Find jobs</span>
                </Button>
              </div>
            </div>
          </div>

          {/* bottom contents */}
          <p>
            <span className="bluesec">Post Your Resume- </span>It only takes a
            few seconds
          </p>
          <p>
            <span className="bluesec">Employer:Post a Job- </span>Your next hire
            is here
          </p>
        </div>
      </>
    );
  }
}

export default index;
