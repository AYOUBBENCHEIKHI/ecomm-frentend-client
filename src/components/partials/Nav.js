import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CategoryService from '../service/CategoryService';

const Nav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    CategoryService.getAllCategories().then(
      (response) => {
        setCategories(response.data.data);
      },
      (error) => {
        console.log("error ", error.response);
      }
    );
  }, []);
  return (
    <>
        <ul className="flex flex-col p-4 mt-4  bg-amber-400 rounded-lg border border-gray-300 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-amber-400 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to={"/profile"}  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-green-400 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            Profile
          </Link>
        </li>
        <li>
          <a href="/signIn" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-green-400 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign In</a>
        </li>
        <li>
          <a href="/signUp" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-green-400 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign Up</a>
        </li>
        <li>
          <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-green-400 md:hover:bg-transparent md:hover:text-green-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Logout</a>
        </li>
        <li>
            <label  class="sr-only">Categories</label>
              <select  class="block  w-full text-sm text-gray-700 bg-transparent  rounded border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option selected>Choose a Category</option>
              {Array.isArray(categories)
                      ? categories.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.title}
                          </option>
                        ))
                      : null}
              </select>
        </li>
      </ul>
    </>
  )
}

export default Nav