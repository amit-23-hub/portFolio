import React from "react";
import api from "../assets/portfolio/api.jpg";
import apod from "../assets/portfolio/apod.jpg";
import iptracker from "../assets/portfolio/iptracker.jpg";
import FTV from "../assets/portfolio/nftportal.jpg";
import Farmer from "../assets/portfolio/webpostman.jpg";
import waveportal from "../assets/portfolio/waveportal.jpg";
import Farmervideo from  "../assets/portfolio/Farmer.mp4"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: api,
      link: 'https://crypto-info-api.cyclic.app/',
      repo: 'https://github.com/rahulkarda/crypto-info-api'
    },
    {
      id: 2,
      src: api,
      link: 'https://webpostman.netlify.app/',
      repo: 'https://github.com/rahulkarda/Web-Postman'
    },
    {
      id: 3,
      src: api,
      link: 'https://mern-child-right-gamified.vercel.app/',
      repo: 'https://github.com/amit-23-hub/MERN-childRight-Gamified'
    },
    {
      id: 4,
      src: api,
      link: 'https://csse-web-eight.vercel.app/',
      repo: 'https://github.com/amit-23-hub/CSSE-WEB'
    },
    
    {
      id: 5,
      src: api,
      link: 'https://waveatrahul.netlify.app/',
      repo: 'https://github.com/rahulkarda/Wave-Portal'
    },
    {
      id: 6,
      src: api,
      link: 'https://interior-designed.vercel.app/',
      repo: 'https://github.com/amit-23-hub/interior-designed'
    },
    {
      id: 7,
      src: api,
      link: 'https://trackmyip.netlify.app/',
      repo: 'https://github.com/amit-23-hub/FTVsalon'
    },
    {
      id: 8,
      src:api,
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
