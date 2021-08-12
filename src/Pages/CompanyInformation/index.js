import React from "react";
import "./CompanyInformation.css";
import { useHistory } from "react-router-dom";

const CompanyInformation = () => {
  const history = useHistory();

  return (
    <div>
      <div className="wrapper companyaccount">
        <div className="IndCompany">
          <h1>Indeed for Employees</h1>
          <img
            src={"../images/companymeet.png"}
            className="companypagelogo"
            alt="logo"
          />
        </div>

        <div className="form-wrapper companyform-wrapper">
          <h1>Lets Create your Account</h1>
          <a href="/Sign">
            <p>
              Already have an account?<span>Sign in</span>
            </p>
          </a>
          <form noValidate>
            {/* name */}
            <div className="yourName">
              <label htmlFor="firstName">Your Name</label>
              <input
                placeholder="Your Name"
                type="text"
                name="yourName"
                noValidate
                // onChange={this.handleChange}
              />
            </div>

            {/* last name */}
            <div className="jobTitle">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                placeholder="Job Title"
                type="text"
                name="jobTitle"
                noValidate
                // onChange={this.handleChange}
              />
            </div>

            {/* company name */}
            <div className="companyName">
              <label htmlFor="name">Company Name</label>
              <input
                placeholder="Company Name"
                type="text"
                name="name"
                noValidate
                // onChange={this.handleChange}
              />
            </div>

            {/* email */}
            <div className="email">
              <label htmlFor="email">Email Address</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                // onChange={this.handleChange}
              />
            </div>

            {/* number */}
            <div className="number">
              <label htmlFor="number">Number</label>
              <input
                placeholder="Enter Your Number"
                type="number"
                name="number"
                noValidate
                // onChange={this.handleChange}
              />
            </div>

            {/* pan card number */}
            <div className="panNumber">
              <label htmlFor="panNumber">Pan Card Number</label>
              <input
                placeholder="Enter valid Pan Card Number"
                type="number"
                name="panNumber"
                noValidate
                // onChange={this.handleChange}
              />
            </div>

            {/* Address */}
            {/* Location */}
            <div className="location">
              <label htmlFor="location">Location</label>
              <input
                placeholder="city"
                type="text"
                name="location"
                noValidate
                // onChange={this.handleChange}
              />
            </div>
            {/* state */}
            <div className="state">
              <label htmlFor="state">State</label>
              <select>
                <option value=""></option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Asam">Asam</option>
                <option value="Gujarat">Gujarat</option>
              </select>
            </div>

            {/* country */}
            <div className="country">
              <label htmlFor="country">Country</label>
              <select>
                <option value=""></option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="US">US</option>
                <option value="France">France</option>
                <option value="Jermany">Jermany</option>
              </select>
            </div>

            {/* company Description */}
            <div className="companyDescription">
              <label htmlFor="companyDescription">Company Description</label>
              <textarea name="description" rows="5" cols="50"></textarea>
              <small>Enter at least 30 characters</small>
            </div>

            {/* industry */}
            <div className="industry">
              <label htmlFor="industry">Industry</label>
              <select>
                <option value="" disabled selected>
                  Select an Option
                </option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="US">US</option>
              </select>
            </div>

            {/* company size */}
            <div className="companySize">
              <label htmlFor="companySize">Company Size</label>
              <select>
                <option value="" disabled selected hidden>
                  How many employees?
                </option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="US">US</option>
              </select>
            </div>
          </form>
        </div>

        {/* last buttons container */}
        <div className="ContinueSkip">
          <button
            class="skip"
            type="submit"
            onClick={() => history.push("/CompanyAccount")}
          >
            Skip
          </button>
          <button type="submit" onClick={() => history.push("/JobDetails")}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
