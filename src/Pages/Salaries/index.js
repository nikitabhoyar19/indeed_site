import React from "react";
import Navbar from "../../Navbar";
import PopularCompanies from "../../reviewcomponents/PopularCompanies";
import ReviewsFooter from "../../reviewcomponents/ReviewsFooter";

import "./Salaries.css";
import { TextField, IconButton, InputAdornment } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

const ResumeInfo = () => {
  const history = useHistory();

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* salaries container */}
      <div className="Salaries_container">
        {/* inner container of search salaries */}
        <div className="salaries">
          {/* first half for heading button */}
          <div className="search_container">
            <h1>Search and compare salaries</h1>
            <p>
              Over <span>600 million</span> salaries on Indeed
            </p>
            <div className="Search_box">
              <TextField
                className="outlined-basic"
                label="Enter a company name"
                variant="outlined"
              />

              {/* <TextField
              className="search_textfield"
                label="Enter a company name"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              /> */}
              <div>
                <button
                  className="search_salbtn"
                  type="submit"
                  onClick={() => history.push("/EmployerAccount")}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* second half for the img */}
          <div className="searching_sec">
            <img
              src={"../images/Search_image.png"}
              className="logo"
              alt="logo"
            />
          </div>
        </div>
      </div>

      {/* popular companies */}
      <PopularCompanies />

      {/* Footer  */}
      <ReviewsFooter />
    </div>
  );
};

export default ResumeInfo;
