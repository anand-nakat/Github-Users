import React from "react";
import { useGlobalContext } from "../context/context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
const Card = () => {
  const { user } = useGlobalContext();
  const {
    name,
    avatar_url,
    bio,
    company,
    blog,
    html_url,
    location,
    twitter_username,
  } = user;

  return (
    <article className="bg-gray-50 dark:bg-gray-900 relative dark:gray-900 text-gray-900 dark:text-gray-100 px-5 py-3 rounded-lg shadow">
      <h2 className="font-semibold text-2xl uppercase">User</h2>
      <div className="gap-4 grid grid-cols-3-auto mt-4">
        <img
          src={avatar_url}
          alt="avatar"
          className="h-24 rounded-full shadow-xl w-24"
        />
        <div className="flex flex-col justify-self-start self-center">
          <h2 className="text-gray-900 dark:text-gray-50 text-2xl font-semibold">
            {name}
          </h2>
          {twitter_username && <p>@{twitter_username}</p>}
        </div>
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-br font-semibold from-blue-200 hover:scale-105 justify-self-end px-2 py-1 shadow-lg rounded self-center text-blue-800 text-center to-blue-400 transform transition-transform"
        >
          Visit Profile
        </a>
      </div>

      <div
        className="my-3 text-xl dark:text-gray-200
text-gray-800"
      >
        {bio || "Github User"}
      </div>

      <div className="dark:text-gray-300 mt-4 space-y-2 text-gray-600 text-xl">
        <div className="flex items-center space-x-3">
          <MdBusiness className="text-xl" />
          <p>{company || "Me"}</p>
        </div>
        <div className="flex items-center space-x-3">
          <MdLocationOn className="text-xl" />
          <p>{location || "Somewhere on Earth"} </p>
        </div>

        {blog && (
          <a
            href={blog}
            className="flex items-center space-x-3 hover:text-black dark:hover:text-white transition-colors"
          >
            <MdLink className="text-2xl" />
            <p className="bg-clip-text bg-gradient-to-tl dark:from-green-300 dark:to-blue-400 font-bold from-pink-700 text-transparent to-indigo-600">
              {blog}{" "}
            </p>
          </a>
        )}
      </div>
    </article>
  );
};

export default Card;
