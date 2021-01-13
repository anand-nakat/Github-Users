import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading,
  } = useAuth0();
  const isUser = isAuthenticated && user;
  console.log(loginWithRedirect);
  return (
    <nav className="bg-blue-900 dark:bg-gray-900 border-b-4 dark:border-yellow-600 border-yellow-500 gap-5 grid grid-cols-3-auto grid-flow-col items-center justify-center px-1 py-3 sm:px-3 text-blue-50">
      {isUser && user.picture && (
        <img
          className="h-16 rounded-full w-16"
          src={user.picture}
          alt={user.name}
        />
      )}
      {isUser && user.name && (
        <h4 className="sm:text-lg lg:text-xl">
          Welcome, <strong>{user.name}</strong>
        </h4>
      )}
      {isUser ? (
        <button
          className="bg-yellow-500 font-semibold justify-self-end px-3 py-1 rounded-lg text-gray-800 uppercase w-max focus:outline-none hover:bg-yellow-400 transition-colors"
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-yellow-500 font-semibold justify-self-end px-3 py-1 rounded-lg text-gray-800 uppercase w-max focus:outline-none hover:bg-yellow-400 transition-colors"
          onClick={loginWithRedirect}
        >
          Login
        </button>
      )}
    </nav>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
