import React from "react";

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

export default User;
