import React, { useState }  from 'react';


export default function Signup() {
    const [showPass, setShowPass] = useState("password")

    const showPassword = () => {
        if (showPass === "password"){
            showPass = setShowPass("text");
        } else {
            showPass = setShowPass("password");
        }
    }
  return (
    <div className='flex flex-col justify-center content-center h-screen bg-gradient-to-bl from-blue-100 to-purple-100'>
        <form>
            <div  className='flex flex-col justify-center content-center items-center gap-5'>
            <h2 className='text-3xl font-semibold'>Sign Up</h2>
            <input className='border-gray-300 bg-opacity-75 border-2 rounded w-80 h-10 pl-2' id="username" name="username" type="text" placeholder='Username' />
            <div className='relative'><input className='border-gray-300 border-2 rounded w-80 h-10 pl-2' id="password" name="password" type={showPass} placeholder='Password' /><div className='absolute top-2 right-2.5 hover:cursor-pointer' onClick={showPassword}>👀</div></div>
            <input className='border-gray-300 border-2 rounded w-80 h-10 pl-2' id="password2" name="password2" type={showPass} placeholder='Confirm Password' />
            <input className='py-1 w-max  rounded-xl px-6 font-medium h-10 text-lg text-white bg-cyan-800 hover:bg-cyan-900 hover:cursor-pointer' type="submit" />
            </div>
        </form>
    
    </div>
  );
}




