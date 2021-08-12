import React from "react";
import "./IndeedResume.css";
import { useHistory } from "react-router-dom";

const IndeedResume = () => {
  const history = useHistory();

  return (
    <div>
      <div className="wrapper Inde_emp">
        <div className="Indeed_res">
          <h1>Create an Indeed Resume</h1>
          <span></span>
          <p>
            There are two ways to create an editable online resume. When you
            upload a resume to start your file will also be saved and available
            when you apply.
          </p>

          <div className="Upload_and_build">
            <button
              class="skip"
              type="submit"
              onClick={() => history.push("/Home")}
            >
              Upload Your Resume
            </button>

            <span>Or</span>

            <button type="submit" onClick={() => history.push("/Home")}>
              Build Your Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndeedResume;
