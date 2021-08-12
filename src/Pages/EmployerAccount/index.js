import React from "react";
import "./EmployerAccount.css";
import { useHistory } from "react-router-dom";

const EmployerAccount = () => {
  const history = useHistory();

  return (
    <div>
      <div className="wrapper sign_emp">
        {/* indeed logo */}
        <img
          src={"../images/320px-Indeed_logo.svg.png"}
          className="Signpagelogo"
          alt="logo"
        />

        <div className="form-wrapper signempform-wrapper">
          <h1>Create An account(its free)</h1>
          <form>
            {/* google login */}
            <div className="signcreateGoogleAccount">
              <button type="submit">
                <span
                  class="iconify gicon"
                  data-icon="bx:bxl-google"
                  data-inline="false"
                ></span>
                Sign in with Google
              </button>
            </div>

            {/* facebook login */}
            <div className="signcreateFacebookAccount">
              <button type="submit">
                <span
                  class="iconify ficon"
                  data-icon="bx:bxl-facebook-circle"
                  data-inline="false"
                ></span>
                Sign in with Facebook
              </button>
            </div>

            <div className="mid_or">
              <h4>Or</h4>
            </div>

            {/* email */}

            <div className="email">
              <label htmlFor="email">Email Address</label>
              <input placeholder="Email" type="email" name="email" required />
            </div>

            {/* Password */}
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                required
              />
            </div>

            {/* submit button */}
            <div className="signcreateAccount">
              <button
                type="submit"
                onClick={() => history.push("/IndeedResume")}
              >
                Sign In
              </button>
            </div>

            {/* create an acccount line */}
            <a href="/Home">
              <small>New To Indeed? Create an account</small>
            </a>
          </form>

          <a href="/Home">
            <small>Forgot Your Password?</small>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmployerAccount;
