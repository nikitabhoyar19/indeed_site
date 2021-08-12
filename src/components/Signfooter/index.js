import React from "react";
import Button from "@material-ui/core/Button";
import "./Signfooter.css";

const Signfooter = () => {
  return (
    <>
      {/* Section which is before footer */}
      <div className="AnotherBlue-Section">
        <div className="AnotherBlueDiv">
          <h1>
            {" "}
            Get Started <br />
            in Minutes{" "}
          </h1>
          <button className="BlueSecbuttons">
            <span className="help-btn-text">Start posting</span>
          </button>
        </div>
      </div>

      {/* Real footer of the page */}
      <div className="footerSec">
        <div className="HelpCenter">
          <h2>We're here to help</h2>

          <p>
            Visit our Help Center for answers to common questions or contact us
            directly.
          </p>

          <Button variant="outlined" className="help-center-button">
            <span className="help-btn-text">Get Started</span>
          </Button>
        </div>

        <div className="PrvSoInd">
          <div className="Privacy">
            <h2>Indeed</h2>
            <li>why indeed</li>
            <li>Contact Us</li>
            <li>Cookies, privacy and terms</li>
            <li>Privacy center</li>
          </div>

          <div className="Solution">
            <h2>Solutions</h2>
            <li>All Products</li>
            <li>Resume</li>
          </div>

          <div className="Indeed">
            <h2>Resources</h2>
            <li>How it Works</li>
            <li>FAQ</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signfooter;
