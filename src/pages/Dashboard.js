import React from "react";
import { Info, Repos, User, Search, Navbar, ThemeSwitch } from "../components";
import loading from "../images/loading.gif";
import { useGlobalContext } from "../context/context";
const Dashboard = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <Navbar />
        <ThemeSwitch />
        <main className="max-w-7xl md:px-4 mx-auto mt-8 ">
          <Search />
          <img
            src={loading}
            alt="loading"
            className="-translate-x-1/2 -translate-y-1/2 fixed left-1/2 md:w-min mx-auto top-1/2 transform w-32 z-10"
          />
        </main>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <ThemeSwitch />
      <main className="max-w-7xl md:px-4 mx-auto mt-8">
        <Search />
        <Info />
        <User />
        <Repos />
      </main>
    </>
  );
};

export default Dashboard;
