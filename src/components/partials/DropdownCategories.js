import React, { useState } from "react";

const DropdownCategories = () => {
  const [openDr, setOpenDr] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenDr(!openDr)}
        className="block py-2 pr-4 pl-3  text-gray-700 rounded hover:bg-green-400 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
      >
        <div className="grid grid-cols-2">
          <div>Categories</div>
          <div className="text-center">
            <svg
              className="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div
        id="dropdown"
        className={`${
          !openDr
            ? "hidden"
            : " absolute z-10 w-44 bg-amber-400 rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        }`}
      >
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <a
              href=":"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-green-400  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-green-400  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-green-400  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-green-400  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropdownCategories;
