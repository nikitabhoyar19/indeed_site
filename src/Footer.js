import React from "react";
import Button from "@material-ui/core/Button";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="btns-container">
        <h2>Let Employers Find You</h2>

        {/* button */}
        <div className="buttons">
          <Button variant="contained" color="primary">
            <span className="whiteSec">Upload Your Resume</span>
          </Button>
        </div>
      </div>
    </>
  );
}
export default Footer;
