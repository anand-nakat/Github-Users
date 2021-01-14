import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const isUser = isAuthenticated && user;

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

export default Navbar;
