import React from "react";
import BlackNavbar from "../../components/BlackNavbar";
import Findjobs from "../../components/Findjobs";
import Advice from "../../components/Advice";

const FindResumes = () => {
  return (
    <div>
      {/* navbar */}
      <BlackNavbar />

      {/* findjob */}
      <Findjobs />

      {/* Advice */}
      <Advice />
    </div>
  );
};

export default FindResumes;
