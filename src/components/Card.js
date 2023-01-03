import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
    return(
        <div  class="min-w-[20rem] max-w-[20rem] p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.item.name}
                  </h5>
                  <hr></hr>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Mobile Number: {props.item.mobile}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Email: {props.item.email}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Country: {props.item.country}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  City: {props.item.city}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  DOB: {props.item.dob}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Start Date: {props.item.contract_start_date}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  End Date: {props.item.contract_end_date}
                </p>
                <div className="flex gap-4">
                <Link
                  type="button"
                  onClick={() => props.handleDetails(props.item)}
                  class="inline-flex props.items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-900 rounded-lg hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-600 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-800"
                >
                  Edit Details
                </Link>
                <Link
                  type="button"
                  onClick={() => props.handleDelete(props.item.pk)}
                  class="inline-flex props.items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Delete
                </Link>
                </div>
              </div>
    )
}