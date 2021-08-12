import React from "react";
import "./Postjob.css";
import BlackNavbar from "../../components/BlackNavbar";
import Cards from "../../components/Cards";
import CardBrand from "../../components/CardBrand";
import Signfooter from "../../components/Signfooter";

const Sign = () => {
  return (
    <div>
      {/* Navbar of this section */}
      <BlackNavbar />

      {/*middle TitleSection  */}
      <div className="MidTitle">
        <h1>
          Let's make your <br />
          next great hire.
          <br />
          Fast.
        </h1>

        <h2>
          You know who you're looking for.
          <br />
          We'll help you find them.
        </h2>
      </div>

      {/* card */}
      <Cards />

      {/* Blue Section */}
      <div className="BlueSecTitle">
        <h1>
          Save time and effort in <br />
          your hiring journey.
        </h1>
        <p>
          Finding the best fit for the job shouldn’t be a full-time job. <br />
          Indeed’s simple and powerful tools let you source, screen,
          <br />
          and hire faster.
        </p>
      </div>

      {/* Blue colour container */}
      <div className="BlueSecTable">
        {/* this is first row */}
        <div className="BlueSecTableRow">
          {/* here is an column in between there is a card */}
          <div className="BlueSecTableCol">
            <div className="TwoSectionCard">
              <img src={"../images/file.png"} className="logo" alt="logo" />

              <div className="BlueSecColCard">
                <h5>
                  {" "}
                  Get <br />
                  More Visibility
                </h5>
                <p>
                  Sponsor your job to ensure it gets seen by the right people.
                </p>
              </div>
            </div>
          </div>

          <div className="BlueSecTableCol tablecol2">
            <div className="TwoSectionCard">
              <img
                src={"../images/ophtalmology.png"}
                className="logo"
                alt="logo"
              />

              <div className="BlueSecColCard">
                <h5>
                  {" "}
                  Get <br /> More Visibility
                </h5>
                <p>
                  Sponsor your job to ensure it gets seen by the right people.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* this is second row */}
        <div className="BlueSecTableRow">
          {/* here is an column in between there is a card */}
          <div className="BlueSecTableCol">
            <div className="TwoSectionCard">
              <img
                src={"../images/performance.png"}
                className="logo"
                alt="logo"
              />
              <div className="BlueSecColCard">
                <h5>
                  {" "}
                  Get
                  <br /> More Visibility
                </h5>
                <p>
                  Sponsor your job to ensure it gets seen by the right people.
                </p>
              </div>
            </div>
          </div>

          <div className="BlueSecTableCol tablecol2">
            <div className="TwoSectionCard">
              <img src={"../images/medal.png"} className="logo" alt="logo" />
              <div className="BlueSecColCard">
                <h5>
                  {" "}
                  Get <br /> More Visibility
                </h5>
                <p>
                  Sponsor your job to ensure it gets seen by the right people.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* this is third row for the button */}
        <div className="BlueSecTableRow">
          <button className="Startbtn">Get Started</button>
        </div>
      </div>

      {/*middle TitleSection  */}
      <div className="MidTitle">
        <h1>Want to fill your job faster? Sponsor it.</h1>

        <h2>
          Sponsored Jobs are over 3.5X more likely to result in a hire. Pick the
          daily budget that works for you; pay only for people clicking on your
          post.1
        </h2>
      </div>

      {/* Image Container */}
      <div className="BlueSecTitle">
        <h1>You're in good company.</h1>
        <p className="imgSectioncont">
          Over 3,000,000 companies use Indeed to hire. See why these amazing
          companies use us as their platform to hire dream talent.
        </p>
      </div>

      <CardBrand />

      {/* BrandCard */}
      <div className="BrandSection">
        <div className="BrandTitle">
          <h1>
            I've used other websites in the past for hiring; nothing has ever
            been this easy, this simple, and this effective."
          </h1>
        </div>
        <div className="BrandImage">
          <img
            src={"../images/male-worker-factory.jpg"}
            className="logo"
            alt="logo"
          />
        </div>
      </div>

      {/* footer section of this sign page */}
      <Signfooter />

      {/* CopySection */}

      <div className="CopySection">
        <h6>
          © 2020 Indeed·Indeed India Operations (Pte) Ltd.|Ground Floor, Block
          C, Divyasree Omega Hitech City Road | Kondapur | Hyderabad TG 500084 |
          IN
        </h6>
      </div>
    </div>
  );
};

export default Sign;
