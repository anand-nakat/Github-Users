import React, { useState, useEffect, useContext } from "react";
/* import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers"; */
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
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
        let {
          rate: { remaining },
        } = data;

        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, `You've exceeded maximum no of Requests per hour`);
        }
      })
      .catch((error) => console.log(error));
  };

  const searchGithubUser = async (user) => {
    setIsLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      toggleError();

      //Get Followers
      axios(`${rootUrl}/users/${user}/followers`)
        .then((res) => setFollowers(res.data))
        .catch((err) => console.log(err));

      //Get Repos
      axios(`${rootUrl}/users/${user}/repos?per_page=100`)
        .then((res) => setRepos(res.data))
        .catch((err) => console.log(err));

      //Set user
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
  useEffect(() => {
    searchGithubUser("anand-nakat");
    // eslint-disable-next-line
  }, []);

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
