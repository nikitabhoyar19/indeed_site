import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./BlackNavbar.css";

export class BlackNavbar extends Component {
  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;

    return (
      <>
        <nav className="Navbar BlackNav">
          <div className="logoSec">
            <img
              src={"../images/320px-Indeed_logo.svg.png"}
              className="logo"
              alt="logo"
            />
          </div>

          <ul className={toggle ? "toggle" : ""}>
            <a href="/">Products</a>
            <a href="/HelpCenter">Resources</a>

            <a href="https://indeed.force.com/employerSupport1/s/?language=en_CA">
              Help Center
            </a>
          </ul>

          <ul className={toggle ? "toggle" : ""}>
            <Link to="/CompanyAccount">
              <a href="/">Post a Job</a>
            </Link>

            <a href="/FindResumes">Find Resumes</a>

            <Link to="/Sign">
              <Button
                className="sign_in_button"
                variant="contained"
                color="primary"
              >
                <span className="whiteSec">Sign in</span>
              </Button>
            </Link>

            <a href="/">Find Jobs</a>

            <li className="closed" onClick={this.menuToggle}>
              X
            </li>
          </ul>

          <div className="menus" onClick={this.menuToggle}>
            Menu
          </div>
        </nav>
      </>
    );
  }
}

export default BlackNavbar;
