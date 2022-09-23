import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';

const SignUp = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })  
  const [confirmPassword,setConfirmPassword] =useState("")
  const onChangeHandler = ({ target }) => {
    setUser({
        ...user,
        [target.name]: target.value
    })
  }
  const [error ,setError] =useState("")
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("")
    try {
      if(user.password === confirmPassword){
        await UserService.signup(user).then(
          () => {
            navigate("/signIn");
            window.location.reload();
          },
          (error) => {
            console.log(error.response.data);
          }
        );
      }
      setError("password is not the sam...")
      
       
     
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12 dark:bg-gray-600">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-amber-500 text-2xl mb-5 dark:text-gray-50">
          Sign Up
        </h1>
        <div className="bg-amber-300 shadow w-full rounded-lg divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-600">
          
          <form onSubmit={handleRegister}>
          <div className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block dark:text-gray-50 ">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              placeholder="Full Name"
              className="border border-amber-600 bg-amber-300 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full dark:bg-gray-600 dark:text-gray-50"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block dark:text-gray-50 ">
              E-mail
            </label>
            <input
              type="text"
              name="email"
              onChange={onChangeHandler}
              placeholder="exemple@...com"
              className="border border-amber-600 bg-amber-300 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full dark:bg-gray-600 dark:text-gray-50"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block dark:text-gray-50 ">
              Password
            </label>
            <input
              type="password"
              onChange={onChangeHandler}
              name="password"
              placeholder="123ABCabc@/.*"
              className="border border-amber-600 bg-amber-300  rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full dark:bg-gray-600 dark:text-gray-50"
            />
            {error?(<p className='text-red-500 text-lg'> Your password not the sam </p>):null}
            <label className="font-semibold text-sm text-gray-600 pb-1 block dark:text-gray-50 ">
              Confirm Password
            </label>
            <input
              type="password"
              onChange={(e)=>setConfirmPassword(e.target.value)}
              name="Confirm Password"
              placeholder="123ABCabc@/."
              className="border border-amber-600 bg-amber-300  rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full dark:bg-gray-600 dark:text-gray-50"
            />
            <button
              type="submit"
              className="transition duration-200 bg-green-500 hover:bg-green-600 focus:bg-green-700 focus:shadow-sm focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Sign Up</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
          </form>
          </div>
      </div>
    </div>
  )
}

export default SignUp