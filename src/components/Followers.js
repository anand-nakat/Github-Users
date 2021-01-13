import React from "react";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";

const Followers = () => {
  const { followers } = useGlobalContext();
  console.log(followers);
  return (
    <article className="h-80 overflow-scroll  bg-gray-50 dark:bg-gray-900  dark:gray-900 text-gray-800 dark:text-gray-100 px-5 py-3 rounded">
      <h2 className="font-semibold text-2xl uppercase">Followers</h2>
      {followers.length < 1 ? (
        "No Followers yet"
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
                  className="h-12 rounded-full shadow-xl w-12"
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

const Wrapper = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;

  &::before {
    content: " followers";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  .followers {
    overflow: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }
  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-grey-5);
    }
  }
`;
export default Followers;
