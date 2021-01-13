import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper className="bg-blue-100 dark:bg-gray-800">
      <main className="container">
        <h1 className=" font-bold mx-auto px-2 text-5xl text-blue-800 dark:text-blue-50 tracking-wide w-max">
          Github Users
        </h1>
        <img src={loginImg} alt="Github Users" />
        <button
          onClick={loginWithRedirect}
          className="p-2 px-4 text-lg uppercase font-bold bg-blue-500 text-blue-100
        hover:bg-blue-400  transition-colors dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          log in / sign up
        </button>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
