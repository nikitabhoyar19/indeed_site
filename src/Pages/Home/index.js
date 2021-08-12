import React from "react";
import Navbar from "../../Navbar";
import Findjobs from "../../components/Findjobs";
import Search from "../../components/Search";
import Advice from "../../components/Advice";
import Footer from "../../Footer";

const Home = () => {
  return (
    <div>
      {/* navbar section */}
      <Navbar />

      {/* findjobs section */}
      <Findjobs />

      {/* Search section */}
      <Search />

      {/* Advice section */}
      <Advice />

      {/* footer section */}
      <Footer />
    </div>
  );
};

export default Home;
