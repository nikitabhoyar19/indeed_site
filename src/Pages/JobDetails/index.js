import React from "react";
import "./JobDetails.css";
import BlackNavbar from "../../components/BlackNavbar";
import { useHistory } from "react-router-dom";

const JobDetails = () => {
  const history = useHistory();

  return (
    <div>
      {/* Navbar */}
      <BlackNavbar />

      <div className="wrapper companyaccount">
        <div className="IndCompany">
          <h1>Job Details</h1>
          <img
            src={"../images/companymeet.png"}
            className="companypagelogo"
            alt="logo"
          />
        </div>

        <div className="form-wrapper companyform-wrapper">
          <form noValidate>
            {/* Employee type */}
            <div className="companySize">
              <label htmlFor="companySize">What type of Employee is it?</label>
              <select>
                <option value="" disabled selected hidden>
                  Employee type
                </option>
                <option value="India">part time</option>
                <option value="Japan">full time</option>
                <option value="US">Internship</option>
              </select>
            </div>

            {/* contract type */}
            <div className="contractType">
              <label htmlFor="contractType">What contract type is it?</label>

              <label>
                <input
                  type="checkbox"
                  name="contractType"
                  value="Temporary"
                  noValidate
                />
                Internship
              </label>
              <label>
                <input
                  type="checkbox"
                  name="contractType"
                  value="Temporary"
                  noValidate
                />
                part time
              </label>
              <label>
                <input
                  type="checkbox"
                  name="contractType"
                  value="Temporary"
                  noValidate
                />
                full time
              </label>

              {/* onChange={this.handleChange} */}
            </div>

            {/*  */}
            <div className="companySize">
              <label htmlFor="companySize">How do you want to receive?</label>
              <select>
                <option value="" disabled selected hidden>
                  select
                </option>
                <option value="Email">Email</option>
                <option value="Number">number</option>
              </select>
            </div>

            {/* resume */}
            <div className="contractType">
              <label htmlFor="contractType">
                Do you want applicant to submit a resume?
              </label>

              <label>
                <input
                  type="radio"
                  name="contractType"
                  value="Temporary"
                  noValidate
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="contractType"
                  value="Temporary"
                  noValidate
                />
                No
              </label>
              <label>
                <input
                  type="radio"
                  name="contractType"
                  value="Temporary"
                  noValidate
                />
                Optional
              </label>

              {/* onChange={this.handleChange} */}
            </div>

            {/* hours */}
            <div className="companySize">
              <label htmlFor="companySize">How many hours per week?</label>
              <select>
                <option value="" disabled selected hidden>
                  Employee type
                </option>
                <option value="India">2-4</option>
                <option value="Japan">4-6</option>
                <option value="US">6-12</option>
              </select>
            </div>

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

            {/* company Description */}
            <div className="companyDescription">
              <label htmlFor="companyDescription">Job Description</label>
              <textarea name="description" rows="5" cols="50"></textarea>
              <small>Enter at least 30 characters</small>
            </div>

            {/* last buttons container */}
            <div className="Continuejob">
              <button
                class="skip"
                type="submit"
                onClick={() => history.push("/CompanyInformation")}
              >
                Back
              </button>
              <button
                type="submit"
                onClick={() => history.push("/EmployerAssist")}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
