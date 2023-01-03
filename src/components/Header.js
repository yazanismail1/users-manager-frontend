import React from "react";
import { Link  } from "react-router-dom";

export default function Header(props) {
    return (
        <div className="flex gap-4 flex-wrap items-center justify-around content-center w-full bg-cyan-900 h-14 font-semibold">
            <div className="flex justify-center content-center">
                <h2 className="text-md font-medium text-white">Welcome, {props.usernameLog}</h2>
            </div>
            <div>
            <Link className='items-center rounded-xl font-medium py-1 px-6 text-md text-white bg-cyan-900 hover:bg-cyan-700' to="/create">Create</Link>
            <Link className='items-center rounded-xl font-medium py-1 px-6 text-md text-white bg-cyan-900 hover:bg-cyan-700' to="/login">Logout</Link>
            </div>
        </div>
    )
}