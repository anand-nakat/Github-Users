import React from "react";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";
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
    <article className="bg-gray-50 dark:bg-gray-900 relative dark:gray-900 text-gray-900 dark:text-gray-100 px-5 py-3 rounded">
      <div className="gap-4 grid grid-cols-3-auto">
        <img
          src={avatar_url}
          alt="avatar"
          className="h-24 rounded-full shadow-xl w-24"
        />
        <div className="flex flex-col items-center justify-self-start self-center">
          <h2 className="text-gray-900 dark:text-gray-50 text-2xl font-semibold">
            {name}
          </h2>
          {twitter_username && <p>@{twitter_username}</p>}
        </div>
        <a
          href={html_url}
          target="_blank"
          className="bg-green-300 hover:bg-green-400 transition-colors font-semibold justify-self-end px-2 py-1 rounded self-center text-green-800 text-center"
        >
          Visit Profile
        </a>
      </div>

      <div
        className="my-3 text-lg dark:text-gray-200
text-gray-800"
      >
        {bio || "Github User"}
      </div>

      <div className="dark:text-gray-300 mt-4 space-y-2 text-gray-700 text-lg">
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
            <MdLink className="text-xl" />
            <p>{blog} </p>
          </a>
        )}
      </div>
    </article>
  );
};

export default Card;
