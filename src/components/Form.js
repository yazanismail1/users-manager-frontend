import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Form(props) {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/home') 
        return true
    }

  return (
    <div className="p-10">
      <form onSubmit={(e) => props.handleSubmit(e)}>
        <div class="mb-6">
          <label
            htmlFor="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={props.item ? props.item.name : ""}
            required
          />
        </div>

        <div class="mb-6">
          <label
            htmlFor="mobile"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mobile Number
          </label>
          <input
            type="number"
            min="1"
            max="9999999999"
            id="mobile"
            name="mobile"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={props.item ? props.item.mobile : ""}
            required
          />
        </div>

        <div class="mb-6">
          <label
            htmlFor="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={props.item ? props.item.email : ""}
            required
          />
        </div>

        <div class="mb-6">
          <label
            htmlFor="country"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={props.item ? props.item.country : ""}
            required
          />
        </div>

        <div class="mb-6">
          <label
            htmlFor="city"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={props.item ? props.item.city : ""}
            required
          />
        </div>

        <div class="mb-6">
          <label
            htmlFor="dob"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            DOB
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={props.item ? props.item.dob : ""}
            required
          />
        </div>

        <div class="mb-6">
          <label
            htmlFor="contract_start_date"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contract Start Date
          </label>
          <input
            type="date"
            id="contract_start_date"
            name="contract_start_date"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={props.item ? props.item.contract_start_date : ""}
            required
          />
        </div>

        <div class="mb-6">
          <label
            htmlFor="contract_end_date"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contract End Date
          </label>
          <input
            type="date"
            id="contract_end_date"
            name="contract_end_date"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={props.item ? props.item.contract_end_date : ""}
            required
          />
        </div>

        <button
          type="submit"
          class="text-white bg-cyan-900 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-800"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={handleCancel}
          class="text-white sm:ml-3 mt-3 bg-cyan-900 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-cyan-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-800"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
