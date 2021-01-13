import React from "react";
import styled from "styled-components";
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
        <h2 className="text-gray-600 dark:text-gray-300 justify-self-end">
          Requests {requests} / 60
        </h2>
      </section>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
      }
    }

    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }
  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`;
const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;
export default Search;
