import React from "react";
import "./Sign.css";

const Sign = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
    `);

    event.preventDefault();
  };

  return (
    <div>
      <div className="wrapper sign">
        {/* indeed logo */}
        <img
          src={"../images/320px-Indeed_logo.svg.png"}
          className="Signpagelogo"
          alt="logo"
        />

        <div className="form-wrapper signform-wrapper">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            {/* email */}

            <div className="email">
              <label htmlFor="email">Email Address</label>
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                // onChange={this.handleChange}
              />
            </div>

            {/* Password */}
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                // onChange={this.handleChange}
              />
            </div>

            {/* submit button */}
            <div className="signcreateAccount">
              <button type="submit">Sign In</button>

              <span>Or</span>
            </div>

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

export default Sign;
