import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Followers from "./Followers";
const User = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 px-6 my-10 gap-4 md:gap-2">
      <Card />
      <Followers />
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User;
