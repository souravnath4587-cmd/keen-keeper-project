import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="bannerContent flex flex-col justify-center items-center space-y-4 mt-10 p-4 md:p-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold items-center">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748b] w-[350px] md:w-[500px] text-center ">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244d3f] text-white">
          <FaPlus />
          Add Friends
        </button>
      </div>
    </div>
  );
};

export default Banner;
