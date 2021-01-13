import React from "react";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";
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
            className="bg-gray-50 dark:bg-gray-900 grid grid-custom-auto p-3 shadow "
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
              <h2 className=" text-lg">{title}</h2>
            </div>
          </article>
        );
      })}
    </div>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
