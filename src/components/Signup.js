import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import ToastFail from "./ToastFail";

export default function Signup() {
  let [showPass, setShowPass] = useState("password");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  const showPassword = () => {
    if (showPass === "password") {
      showPass = setShowPass("text");
    } else {
      showPass = setShowPass("password");
    }
  };

  const handleClose = () => {
    setShowToast(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/accounts/signup/", {
        username: username,
        password: password,
        password2: password2,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {

        setShowToast(true)
      });
  };

  return (
    <>
      <div className="flex flex-col justify-center content-center h-screen bg-gradient-to-bl from-blue-100 to-purple-100">
        <form onSubmit={handleSignup}>
          <div className="flex flex-col justify-center content-center items-center gap-5">
            <h2 className="text-4xl font-semibold">Sign Up</h2>
            <input
              className="border-gray-300 bg-opacity-75 border-2 rounded w-80 h-10 pl-2"
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="relative">
              <input
                className="border-gray-300 border-2 rounded w-80 h-10 pl-2"
                id="password"
                name="password"
                type={showPass}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <div
                className="absolute top-2 right-2.5 hover:cursor-pointer"
                onClick={showPassword}
              >
                👀
              </div>
            </div>
            <input
              className="border-gray-300 border-2 rounded w-80 h-10 pl-2"
              id="password2"
              name="password2"
              type={showPass}
              placeholder="Confirm Password"
              onChange={(e) => setPassword2(e.target.value)}
            />
            <input
              className="py-1 w-80  rounded-xl px-6 font-medium h-10 text-lg text-white bg-cyan-800 hover:bg-cyan-900 hover:cursor-pointer"
              type="submit"
              value="Sign Up"
            />
            <Link className="text-sm" to="/login">
              Have an account, Login
            </Link>
          </div>
        </form>
      </div>
      {showToast && <ToastFail handleClose={handleClose} />}
    </>
  );
}
