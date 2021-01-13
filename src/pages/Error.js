import React from "react";

import { Link } from "react-router-dom";
const Error = () => {
  return (
    <main className="min-h-screen grid place-items-center bg-blue-200 dark:bg-gray-800">
      <div className="p-3 max-w-xl text-center">
        <h2 className="text-7xl text-gray-900 dark:text-gray-50 mb-8">
          {" "}
          404 Error
        </h2>
        <p className="capitalize text-xl mb-8 text-gray-700 dark:text-gray-100">
          The page you were looking for could not be found on the server
        </p>
        <Link to="/">
          <button className="p-2 rounded w-max px-5 bg-blue-300 hover:bg-blue-400 hover:text-blue-100 transition-colors text-blue-800 font-bold uppercase text-xl">
            Back To Home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Error;
