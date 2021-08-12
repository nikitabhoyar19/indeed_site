import React from "react";
import "./ReviewsFooter.css";

const ReviewsFooter = () => {
  return (
    <div className="ReviewsFooter">
      {/* inner section */}
      <div className="FirstSection">
        {/* First Section */}
        <h2>More Popular Companies</h2>
        <div className="MorePopular">
          <div className="FirstMorePopular">
            <li>Standard Chartered Bank</li>
            <li>L&T Infotech</li>
            <li>Cognizant Technology Solutions</li>
            <li>Sutherland</li>
            <li>WNS Global Services</li>
            <li>Hinduja Global Solutions</li>
            <li>Axis Bank</li>
            <li>Sutherland</li>
            <li>Yes Bank</li>
          </div>

          <div className="SecondMorePopular">
            <li>Bharti Airtel Limited</li>
            <li>Oracle</li>
            <li>Bosch</li>
            <li>Syntel</li>
            <li>Deutsche Bank</li>
            <li>JPMorgan Chase</li>
            <li>HDFC Bank</li>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="Top_Rated">
        <h2>Indeeds Top Rated WorkPlace Awards</h2>
        <li>Tech in India</li>
      </div>
    </div>
  );
};

export default ReviewsFooter;
