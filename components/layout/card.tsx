import React from "react";
import Image from "next/image";

const Card = ({
  title,
  description,
  image,
  price,
  features,
}: {
  title: string;
  description: string;
  image: string;
  price: number;
  features: string[];
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
      <div className="relative h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <h2 className="text-xl font-bold mt-4 mb-2 text-black">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="mt-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex text-gray-600">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.293 16.707a1 1 0 01-1.414 0L3.586 12a1 1 0 011.414-1.414L9 13.586l6.293-6.293a1 1 0 011.414 1.414L10.414 16.7a1 1 0 01-1.414.008l-.707-.7z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-300 px-6 py-3 rounded-full mt-8 self-center">
        Buy Now - ${price}
      </button>
    </div>
  );
};

export default Card;
