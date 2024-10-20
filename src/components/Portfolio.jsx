import React from "react";     
import booking from "../assets/portfolio/booking-easy.png";
import farmer from "../assets/portfolio/farmer.png";
import iliff from "../assets/portfolio/iliff.png";
import societyWeb from "../assets/portfolio/societyWeb.png";
import oasis from "../assets/portfolio/oasis.png";
import rightExplorer from "../assets/portfolio/rightExplorer.png";
import portfolio from "../assets/portfolio/port.png";
import Farmervideo from  "../assets/portfolio/Farmer.mp4" ; 
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: iliff,
      link: 'https://www.iliff.edu/',
      repo: '#'
    },
    {
      id: 2,
      src: farmer,
      link: Farmervideo,
      repo: 'https://github.com/amit-23-hub/Farmer-Consumer-WebApp'
    },
    {
      id: 3,
      src: rightExplorer,
      link: 'https://mern-child-right-gamified.vercel.app/',
      repo: 'https://github.com/amit-23-hub/MERN-childRight-Gamified'
    },
    {
      id: 4,
      src: societyWeb ,
      link: 'https://csse-web-eight.vercel.app/',
      repo: 'https://github.com/amit-23-hub/CSSE-WEB'
    },
    
    {
      id: 5,
      src: booking,
      link: 'https://waveatrahul.netlify.app/',
      repo: 'https://github.com/amit-23-hub/booking-easy-'
    },
    {
      id: 6,
      src: oasis,
      link: 'https://interior-designed.vercel.app/',
      repo: 'https://github.com/amit-23-hub/interior-designed'
    },
    {
      id: 7,
      src: portfolio,
      link: 'https://trackmyip.netlify.app/',
      repo: 'https://github.com/amit-23-hub/FTVsalon'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
