import React from "react";
import { useGlobalContext } from "../context/context";

const Followers = () => {
  const { followers } = useGlobalContext();

  return (
    <article className="h-96 overflow-scroll  bg-gray-50 dark:bg-gray-900  dark:gray-900 text-gray-800 dark:text-gray-100 px-5 py-3 rounded-lg shadow">
      <h2 className="font-semibold text-2xl uppercase">Followers</h2>
      {followers.length < 1 ? (
        <p className="capitalize font-semibold mt-16 text-center text-gray-800 dark:text-yellow-400 text-xl">
          No Followers yet :(
        </p>
      ) : (
        <div className="mt-3 p-2 space-y-4">
          {followers.map((follower) => {
            const { login, id, avatar_url, html_url } = follower;
            return (
              <div
                key={id}
                className="auto-cols-max grid grid-flow-col items-center space-x-5  "
              >
                <img
                  src={avatar_url}
                  alt="avatar"
                  className="h-10 rounded-full shadow-xl w-10"
                />
                <div className="flex flex-col items-start ">
                  <h2 className="text-gray-900 dark:text-gray-50 text-lg font-semibold">
                    {login}
                  </h2>
                  <a
                    href={html_url}
                    className="text-gray-800 dark:text-gray-200"
                  >
                    {html_url}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
};

export default Followers;
