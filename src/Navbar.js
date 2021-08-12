import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

class Navbar extends React.Component {
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
        <nav className="Navbar WhiteNav">
          <div className="logoSec">
            <img
              src={"../images/320px-Indeed_logo.svg.png"}
              className="logo"
              alt="logo"
            />
          </div>

          <ul className={toggle ? "toggle" : ""}>
            <a href="/Home">Find Jobs</a>
            <a href="/Reviews">Company Reviews</a>
            <a href="/Salaries">Find Salaries</a>
          </ul>

          <ul className={toggle ? "toggle" : ""}>
            <a href="/EmployerAccount">Post your Resume</a>

            <a href="/Reviews">Company Reviews</a>

            <a href="/Sign">
              <span className="bluesec">Sign in</span>
            </a>

            <a href="/Postjob">Employers/Post Job</a>
            <li className="close" onClick={this.menuToggle}>
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

export default Navbar;
