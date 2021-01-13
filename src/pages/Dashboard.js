import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { useGlobalContext } from "../context/context";
const Dashboard = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <main className="max-w-7xl md:px-4 mx-auto ">
        <Navbar />
        <Search />
        <img
          src={loadingImage}
          alt="loading"
          className="-translate-x-1/2 -translate-y-1/2 fixed left-1/2 md:w-min mx-auto top-1/2 transform w-32 z-10"
        />
      </main>
    );
  }
  return (
    <main className="max-w-7xl md:px-4 mx-auto ">
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
