import React from "react";
import footerLogo from "../../assets/logo-xl.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244d3f]">
      <div className="bannerContent flex flex-col justify-center items-center space-y-4 p-4 md:px-10 md:pt-20 md:pb-10 text-white">
        <img src={footerLogo} alt="" />
        <p className=" w-[350px] md:w-[500px] text-center ">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="text-white text-center">
          <h4 className="text-xl font-bold pb-4">Social Links</h4>
          <div className=" flex flex-row gap-6 ">
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={instagram} alt="" />
            </a>
            <a href="">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
        <hr className=" border-[#1abb62] my-4 w-full" />
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-8 justify-between items-center mt-4 md:mt-0 ">
            <p>Privacy Policy</p>
            <p> Terms of Service </p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
