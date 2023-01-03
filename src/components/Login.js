import React, { useState } from "react";
import { Link  } from "react-router-dom";

export default function Login(props) {
  let [showPass, setShowPass] = useState("password")

  const showPassword = () => {
    if (showPass === "password") {
      showPass = setShowPass("text");
    } else {
      showPass = setShowPass("password");
    }
  };
  
  return (
    <div className="flex flex-col justify-center content-center h-screen bg-gradient-to-bl from-blue-100 to-purple-100">
      <form onSubmit={(e) => props.handleLogin(e)}>
        <div className="flex flex-col justify-center content-center items-center gap-5">
          <h2 className="text-4xl font-semibold">Log In</h2>
          <input
            className="border-gray-300 bg-opacity-75 border-2 rounded w-80 h-10 pl-2"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            onChange={(e) => {props.onChangeUsername(e.target.value)}}
          />
          <div className="relative">
            <input
              className="border-gray-300 border-2 rounded w-80 h-10 pl-2"
              id="password"
              name="password"
              type={showPass}
              placeholder="Password"
              onChange={(e) => {props.onChangePassword(e.target.value)}}
            />
            
            <div
              className="absolute top-2 right-2.5 hover:cursor-pointer"
              onClick={showPassword}
            >
              👀
            </div>
          </div>
            <input
                className="py-1 w-80  rounded-xl px-6 font-medium h-10 text-lg text-white bg-cyan-800 hover:bg-cyan-900 hover:cursor-pointer"
                type="submit" value="Login"
            /> 
            <Link className='text-sm' to="/signup">Not a user, Sign Up now</Link>
        </div>
      </form>
    </div>
  );
}
