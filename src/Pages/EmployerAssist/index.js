import React from "react";
import "./EmployerAssist.css";
import { useHistory } from "react-router-dom";

const EmployerAssist = () => {
  const history = useHistory();

  return (
    <div>
      <div className="wrapper companyaccount_emp">
        <div className="companyform-wrapper_emp">
          <h1>Employer Assist</h1>
          <div className="employer_assist_between">
            <img
              src={"../images/companymeet.png"}
              className="companypagelogo"
              alt="logo"
            />
            <div className="employer_assist_terms">
              <small>
                By creating an account , you agree to Indeeds Terms of Services,
                Cookie Policy and Privacy Policy. You consent to receiving
                messages from Indeed and may opt out from receiving such
                messages by following the unsubscribe link in our messages, or
                as detailed in our terms.
              </small>

              <div className="confirmation_btn">
                <button type="submit" onClick={() => history.push("/")}>
                  Yes I agree
                </button>

                <button
                  class="skip"
                  type="submit"
                  onClick={() => history.push("/JobDetails")}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerAssist;
