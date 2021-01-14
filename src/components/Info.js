import React from "react";
import { useGlobalContext } from "../context/context";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const UserInfo = () => {
  const { user } = useGlobalContext();
  const { following, followers, public_gists, public_repos } = user;
  const info = [
    {
      id: 1,
      title: "Repos",
      icon: <GoRepo />,
      color: "pink",
      value: public_repos,
    },
    {
      id: 2,
      title: "Followers",
      icon: <FiUserPlus />,
      color: "green",
      value: followers,
    },
    {
      id: 3,
      title: "Following",
      icon: <FiUsers />,
      color: "purple",
      value: following,
    },
    {
      id: 4,
      title: "Gists",
      icon: <GoGist />,
      color: "yellow",
      value: public_gists,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-2xl gap-4 px-4 py-3">
      {info.map((item) => {
        const { id, title, icon, color, value } = item;
        return (
          <article
            key={id}
            className="bg-gray-50 dark:bg-gray-900 grid grid-custom-auto p-3 shadow rounded-lg"
          >
            <div
              className={` grid p-3 place-items-center rounded-full text-4xl w-max text-${color}-600 bg-${color}-200`}
            >
              {icon}
            </div>
            <div className="flex flex-col items-center text-gray-700 dark:text-gray-200">
              <p className="dark:text-gray-50 font-bold text-gray-800">
                {value}
              </p>
              <h2 className="dark:text-gray-300 font-extralight text-gray-500 text-lg">
                {title}
              </h2>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default UserInfo;
