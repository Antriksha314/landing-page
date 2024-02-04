import { animateScroll as scroll, Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="py-4 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto">
        <Link className="text-xl font-bold px-6 text-white mr-4" to="home" smooth={true}>
          Website
        </Link>
        <ul className="flex flex-col md:flex-row justify-end mt-4 md:mt-0">
          <li className="mr-4">
            <Link
              className=" hover:bg-gray-100 hover:text-black text-white text-xl font-bold py-3 px-8 rounded-full mr-4 mb-4 md:mb-0"
              to="home"
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li className="mr-4">
            <Link
              className=" hover:bg-gray-100 hover:text-black text-white text-xl font-bold py-3 px-8 rounded-full mr-4 mb-4 md:mb-0"
              to="plans"
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li className="mr-4">
            <Link
              className=" hover:bg-gray-100 hover:text-black text-white text-xl font-bold py-3 px-8 rounded-full mr-4 mb-4 md:mb-0"
              to="about-us"
              smooth={true}
            >
              About Us
            </Link>
          </li>
          <li className="mr-4">
            <Link
              className=" hover:bg-gray-100 hover:text-black text-white text-xl font-bold py-3 px-8 rounded-full mr-4 mb-4 md:mb-0"
              to="portfolio"
              smooth={true}
            >
              Portfolio
            </Link>
          </li>
          <li className="mr-4">
            <Link
              className=" hover:bg-gray-100 hover:text-black text-white text-xl font-bold py-3 px-8 rounded-full mr-4 mb-4 md:mb-0"
              to="contact"
              smooth={true}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
