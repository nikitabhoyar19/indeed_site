import { React } from "react";
import "./CompanyAccount.css";
import { useHistory } from "react-router-dom";

const CompanyAccount = () => {
  const history = useHistory();

  return (
    <div>
      <div className="wrapper companyaccount">
        <div className="form-wrapper companyform-wrapper">
          <h1>Lets Create your Account</h1>
          <a href="/Sign">
            <p>
              Already have an account?<span>Sign in</span>
            </p>
          </a>
          <form>
            {/* name */}
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
              <input placeholder="Email" type="email" name="email" />
            </div>

            {/* Password */}

            {/* submit button */}
            <div className="companycreateAccount">
              <button
                type="submit"
                onClick={() => history.push("/CompanyInformation")}
              >
                Continue
              </button>
            </div>

            {/* privacy policy line */}
            <div>
              <small>
                By creating an account , you agree to Indeeds Terms of Services,
                Cookie Policy and Privacy Policy. You consent to receiving
                messages from Indeed and may opt out from receiving such
                messages by following the unsubscribe link in our messages, or
                as detailed in our terms.
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyAccount;
