import React from "react";
import HeroImage from "../assets/amitsssss.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          <img
            src={HeroImage}
            alt="profile"
            className="mx-auto w-32 sm:w-40 md:w-48 lg:w-66 rounded-full object-cover border-4 border-white"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a  <span className="text-pink-500">Software Developer</span> 
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a highly motivated and detail-oriented Software Developer
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-full object-cover border-4 border-white mx-auto w-40 sm:w-48 md:w-64 lg:w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
