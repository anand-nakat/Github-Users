import React from "react";
import image from "../images/landing page.svg";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <main className="min-h-screen bg-gray-200">
      <header className="bg-gradient-to-br from-light-blue-600 p-5 sm:clip-path-bottom sm:pb-20 to-light-blue-700">
        <h1 className="font-bold text-5xl text-center text-white tracking-wide uppercase">
          Github Users
        </h1>
        <div className="gap-y-4 grid grid-cols-1 items-center md:grid-cols-2 mt-3">
          <div className="h-full">
            <img
              src={image}
              alt="img"
              className="lg:w-3/4 md:w-5/6 mx-auto w-2/3 xl:w-2/3"
            />
          </div>
          <div className="font-poppins md:text-xl xl:text-2xl p-4 text-lg text-light-blue-50">
            <p>
              <span className="pl-5">Github Users </span> is a Web Application
              which uses Github API to provide a summary about a Github User,
              like number of Repositories owned by the User, number of
              Followers, Gists created, etc.
            </p>
            <p className="mt-5">
              It uses Fusion Charts to represent more info like Most Used
              Languages by the User, Most Starred Repositories, Most Forked
              Repositories in the form of Charts.
            </p>
          </div>
        </div>
      </header>
      <section className="mt-5">
        <div className="gap-y-4 grid mx-auto place-items-center">
          <p className="font-extralight font-raleway px-2 text-center text-gray-800 text-xl">
            To get started, you will need to Login or Create a New account.{" "}
            <br /> You can also Log In with your social accounts
          </p>
          <button
            onClick={loginWithRedirect}
            className="bg-light-blue-600 font-bold hover:bg-light-blue-500 p-2 px-12 text-lg text-light-blue-100 transition-colors uppercase"
          >
            log in / sign up
          </button>
        </div>
      </section>
    </main>
  );
};

export default Login;
