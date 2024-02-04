import React from "react";
import portfolios from "../data/portifolio.json";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const PortfolioSlider = () => {
  return (
    <div
      id="portfolio"
      className="relative flex flex-col items-center justify-center h-screen"
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        Our Portfolio
      </h1>
      <div className="container mx-auto py-2 px-4 ">
        <div className="max-w-6xl mx-auto my-8 px-2">
          <Swiper
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="mySwiper mb-2"
          >
            {portfolios.map((portfolio, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-2 gap-4 px-2 ">
                  <div className="flex items-center px-6 py-12 m-4">
                    <Image
                      src={portfolio.image}
                      alt={portfolio.title}
                      width={500}
                      height={800}
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                  <div className="flex items-center px-1 py-12 m-4">
                    <div className="px-4">
                      <h2 className="text-3xl font-bold mb-2 px-24">
                        {portfolio.title}
                      </h2>
                      <p className="text-white mt-2 mb-5">
                        {portfolio.description}
                      </p>
                      <div className="px-24">
                        <Link
                          href={portfolio?.link}
                          className="px-10 mt-4 bg-indigo-500 text-white py-2  rounded-md hover:bg-indigo-600 transition-colors duration-300"
                        >
                          Visit now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlider;
