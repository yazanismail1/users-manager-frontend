import React from 'react';
import { Link  } from "react-router-dom";

export default function Layout() {
  return (
    <div className='flex flex-wrap gap-10 justify-center content-center h-screen text-center bg-gradient-to-bl from-blue-100 to-purple-100'>
        <Link className='py-4 w-32 rounded-xl px-6 font-medium text-lg text-white bg-cyan-800 hover:bg-cyan-900' to="/login">Log In</Link>
        <Link className='py-4 w-32  rounded-xl px-6 font-medium text-lg text-white bg-cyan-800 hover:bg-cyan-900' to="/signup">Sign Up</Link>
    </div>
  );
}




