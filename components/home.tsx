/* eslint-disable react/no-unescaped-entities */
import AboutUs from "./about-us";
import Contact from "./contact";
import PortfolioSlider from "./potifolio";
import Service from "./plans";

const HomePageBanner = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-2">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
            Shop The Latest Trends in Fashion and Accessories
          </h1>
          <p className="text-lg md:text-2xl text-white text-center mb-12">
            Discover new styles and trends for the season.
          </p>
          <div className="flex flex-wrap justify-center">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full mr-4 mb-4">
              Shop Women's
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full mr-4 mb-4">
              Shop Men's
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full mb-4">
              Shop Accessories
            </button>
          </div>
        </div>
        <div id="plans" className="mb-8">
          <Service />
        </div>
        <div className="py-24 mb-8">
          <AboutUs />
        </div>
        <div className="mt-10">
          <PortfolioSlider />
        </div>
        <div className="mt-8">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default HomePageBanner;
