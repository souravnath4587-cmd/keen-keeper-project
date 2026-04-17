import React, { use } from "react";
import Banner from "../HomePage/Banner";
import Tab from "../HomePage/Tab";
import Friends from "../HomePage/Friends";
const friendsData = fetch("/friends.json").then((res) => res.json());

const Home = () => {
  const friends = use(friendsData);
  return (
    <div className="">
      <div className="container mx-auto bg-[#f7f5f8ec]">
        <Banner />
        <Tab friends={friends} />
        <Friends friends={friends} />
      </div>
    </div>
  );
};

export default Home;
