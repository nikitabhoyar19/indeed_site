import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Postjob from "./Pages/Postjob";
import Home from "./Pages/Home";
import Sign from "./Pages/Sign";
import CompanyAccount from "./Pages/CompanyAccount";
import CompanyInformation from "./Pages/CompanyInformation";
import JobDetails from "./Pages/JobDetails";
import EmployerAssist from "./Pages/EmployerAssist";
import EmployerAccount from "./Pages/EmployerAccount";
import IndeedResume from "./Pages/IndeedResume";
import Salaries from "./Pages/Salaries";
import FindResumes from "./Pages/FindResumes";

import "./App.css";
import Reviews from "./Pages/Reviews";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* Sign */}
          <Route path="/Postjob" component={Postjob}>
            <Postjob />
          </Route>

          {/* Reviews */}
          <Route path="/Reviews" component={Reviews}>
            <Reviews />
          </Route>

          {/* Sign */}
          <Route path="/Sign" component={Sign}>
            <Sign />
          </Route>

          {/* Company Account Signup */}
          <Route path="/CompanyAccount" component={CompanyAccount}>
            <CompanyAccount />
          </Route>

          {/* company information page */}
          <Route path="/CompanyInformation" component={CompanyInformation}>
            <CompanyInformation />
          </Route>

          {/* job details */}
          <Route path="/JobDetails" component={JobDetails}>
            <JobDetails />
          </Route>

          {/* Employer Assist */}
          <Route path="/EmployerAssist" component={EmployerAssist}>
            <EmployerAssist />
          </Route>

          {/* Employer Account */}
          <Route path="/EmployerAccount" component={EmployerAccount}>
            <EmployerAccount />
          </Route>

          {/* Indeed Resume UploadPage for Employee */}
          <Route path="/IndeedResume" component={IndeedResume}>
            <IndeedResume />
          </Route>

          {/* Resume Info */}
          <Route path="/Salaries" component={Salaries}>
            <Salaries />
          </Route>

          {/* Find resumes */}
          <Route path="/FindResumes" component={FindResumes}>
            <FindResumes />
          </Route>

          {/* home */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
