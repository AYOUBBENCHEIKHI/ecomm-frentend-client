import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import Mode from "./Mode";
import Nav from "./Nav";
import Search from "./Search";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const {items} = useCart();
 
  /**
    <div className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"> */
  return (
    <div className=" bg-amber-400 border-amber-500 px-2 sm:px-4 fixed w-full z-20 top-0 left-0 py-2.5  dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto md:container md:mx-auto">
        <a href="/" className="flex items-center">
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            E-ecommerce
          </span>
        </a>
        <div className="flex md:order-2">
          <div className="p-2.5 mr-1 hover:bg-amber-300 rounded-full text-amber-700 dark:hover:bg-gray-400">
            <Mode />
          </div>
          <div className="hover:bg-amber-300 text-amber-700 dark:hover:bg-gray-400 dark:text-gray-100 rounded-full">
            <span className="md:block px-2 py-0.5 absolute  text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
               {items.length}
            </span>
            <Link
              to={"/cart"}
              className="relative flex flex-row items-center h-11 focus:outline-none  text-white-600 hover:text-white-800 border-l-4 border-transparent  pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
          <div>
            <button
              type="button"
              onClick={() => setOpenSearch(!openSearch)}
              className="md:hidden text-amber-700 dark:text-gray-200 hover:bg-amber-300 dark:hover:bg-gray-700  focus:outline-none focus:ring-4 focus:ring-amber-500 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden relative md:block mr-6">
            <Search />
          </div>

          <div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              onClick={() => setOpenNav(!openNav)}
              className="inline-flex items-center p-2 text-sm text-amber-700 rounded-lg md:hidden hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className=" w-full right-0  md:flex md:w-auto md:order-1">
          <div
            className={`${
              openSearch ? "flex w-auto relative mt-3 md:hidden" : "hidden"
            }`}
          >
            <Search />
          </div>
        </div>

        <div
          className={`${
            openNav
              ? "flex absolute top-10 right-0  w-auto"
              : "hidden md:flex md:w-auto md:order"
          }`}
        >
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
