import React, { Suspense, use } from "react";
import Banner from "../HomePage/Banner";
import Tab from "../HomePage/Tab";
import Friends from "../HomePage/Friends";
const friendsData = fetch("/friends.json").then((res) => res.json());

const Home = () => {
  const friends = use(friendsData);
  return (
    <div className="">
      <div className="container mx-auto bg-[#f7f5f8ec] p-4 mt-20">
        <Banner />
        <Tab friends={friends} />
        <Suspense
          fallback={
            <div className="flex justify-center items-center my-8">
              <span className="loading loading-spinner text-success loading-xl"></span>
            </div>
          }
        >
          <Friends friends={friends} />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
