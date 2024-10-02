import React from "react";
import img1 from '../assets/about/cursorIcon.png';
import img2 from '../assets/about/serverIcon.png';
import img3 from '../assets/about/uiIcon.png';
import img4 from '../assets/about/aboutImage.png';

const About = () => {
  return (
    <section id="about" className="relative  rounded-2xl py-12 px-8 mt-32 mx-auto max-w-screen-xl">
      <h2 className="text-4xl font-bold tracking-wider text-white uppercase text-center mb-10">
        About
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        {/* This image will be hidden on mobile screens and visible on md (medium screens) and above */}
        <img
          src={img4}
          alt="Me sitting with a laptop"
          className="hidden md:block w-full md:w-1/3 rounded-xl mb-8 md:mb-0 md:mr-8"
        />
        <ul className="space-y-8">
          <li className="flex items-center bg-gradient-to-r from-blue-200/60 to-transparent p-6 rounded-lg transition-all duration-300 hover:bg-blue-200/60">
            <img src={img3} alt="Cursor icon" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold text-white">Frontend Developer</h3>
              <p className="text-lg text-gray-200">
                I'm a frontend developer with experience in building responsive and optimized sites.
              </p>
            </div>
          </li>
          <li className="flex items-center bg-gradient-to-r from-blue-200/60 to-transparent p-6 rounded-lg transition-all duration-300 hover:bg-blue-200/60">
            <img src={img2} alt="Server icon" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold text-white">Backend Developer</h3>
              <p className="text-lg text-gray-200">
                I have experience developing fast and optimized back-end systems and APIs.
              </p>
            </div>
          </li>
          <li className="flex items-center bg-gradient-to-r from-blue-200/60 to-transparent p-6 rounded-lg transition-all duration-300 hover:bg-blue-200/60">
            <img src={img1} alt="UI icon" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold text-white">UI Designer</h3>
              <p className="text-lg text-gray-200">
                I have designed multiple landing pages and have created design systems as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
