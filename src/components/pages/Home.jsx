import React from "react";
import Banner from "../HomePage/Banner";
import Tab from "../HomePage/Tab";
import Friends from "../HomePage/Friends";

const Home = () => {
  return (
    <div className="">
      <div className="container mx-auto bg-[#f7f5f8ec]">
        <Banner />
        <Tab />
        <Friends />
      </div>
    </div>
  );
};

export default Home;
