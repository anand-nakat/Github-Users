import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useGlobalContext } from "../context/context";
const Search = () => {
  const {
    requests,
    searchGithubUser,
    error: { show, content },
    isLoading,
  } = useGlobalContext();
  const [user, setUser] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  };

  const [showTooltip, setShowTooltip] = useState(false);

  const openTooltip = () => {
    setTimeout(() => {
      setShowTooltip(false);
    }, 6000);
    setShowTooltip(true);
  };

  return (
    <>
      {show && (
        <p className="-mb-2 font-semibold md:text-lg px-2 text-center text-red-500 text-sm">
          {content}
        </p>
      )}

      <section className="grid grid-cols-1 md:auto-cols-max md:grid-flow-col md:items-center p-2">
        <form
          className="flex flex-col items-center md:flex-row md:space-x-3 mx-auto w-4/5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex-grow relative w-full">
            <MdSearch className="absolute transform top-1/2 -translate-y-1/2  text-gray-600 dark:text-gray-300 left-1 text-3xl" />
            <input
              type="text"
              placeholder="Search Github User"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="bg-gray-50 dark:bg-gray-900 dark:focus:ring-yellow-400 dark:placeholder-gray-300 dark:text-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-400 font-semibold px-10 py-2 rounded-lg text-xl w-full"
            />
          </div>
          {requests > 0 && !isLoading && (
            <button className="py-1  w-max bg-indigo-300 text-indigo-800 hover:bg-indigo-400 transition-colors rounded font-semibold text-lg my-2 px-8 md:px-4">
              Search
            </button>
          )}
        </form>
        <div className="text-gray-600 dark:text-gray-300 justify-self-end space-x-3">
          <span> Requests {requests} / 60</span>
          <span
            onClick={() => openTooltip()}
            className="bg-gray-900 cursor-pointer dark:bg-black px-2 rounded-full text-gray-50 text-lg"
          >
            ?
          </span>
        </div>
      </section>
      {showTooltip && (
        <div className="bg-light-blue-300 dark:bg-light-blue-600 dark:text-gray-200 font-semibold max-w-xs md:ml-auto md:mx-0 md:my-3 mx-auto p-2 rounded-lg shadow text-light-blue-800">
          Github API has a Rate Limit which allows for up to 60 Search requests
          per hour.
        </div>
      )}
    </>
  );
};

export default Search;
