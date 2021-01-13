import React, { useState, useEffect, useContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [user, setUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    show: false,
    content: "",
  });

  const toggleError = (show = false, content = "") => {
    setError({ show, content });
  };

  const fetchRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        console.log(data);
        let {
          rate: { remaining },
        } = data;
        console.log(remaining);
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, `You've exceeded maximum no of Requests per hour`);
        }
      })
      .catch((error) => console.log(error));
  };
  /* - [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
- [Followers](https://api.github.com/users/john-smilga/followers) */
  const searchGithubUser = async (user) => {
    setIsLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      toggleError();
      setUser(response.data);
    } else {
      toggleError(
        true,
        "No Such user exists with the username you searched for "
      );
    }
    fetchRequests();
    setIsLoading(false);
  };

  useEffect(fetchRequests, []);

  return (
    <GithubContext.Provider
      value={{
        user,
        repos,
        followers,
        requests,
        isLoading,
        error,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GithubContext);
};

export { GithubProvider };
