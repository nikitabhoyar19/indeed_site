import React from "react";
import "./Reviews.css";
import { Card, CardContent, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Navbar from "../../Navbar";
import HiringCompanies from "../../reviewcomponents/HiringCompanies";
import PopularCompanies from "../../reviewcomponents/PopularCompanies";
import ReviewsFooter from "../../reviewcomponents/ReviewsFooter";

import {
  TextField,
  IconButton,
  InputAdornment,
  Container,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Reviews = () => {
  return (
    <div className="ReviewsSection">
      {/* Navbar */}
      <Navbar />

      {/* Great Places Search Sections */}
      <div className="GreatSearchSection">
        <div className="GreatInnerSection">
          <div className="GreatSearch">
            <h1>Find great places to work</h1>
            <span>Discove millions of company reviews</span>

            <div className="SearchCompanyBox">
              <TextField
                label="Enter a Company"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button variant="contained" color="primary">
                Find
              </Button>
            </div>
          </div>

          <div className="GreatSearchImage"></div>
        </div>
      </div>

      {/* Hiring Companies */}
      <HiringCompanies />

      {/* Popular Companies */}
      <PopularCompanies />

      {/* Reviews Footer */}
      <ReviewsFooter />
    </div>
  );
};

export default Reviews;
