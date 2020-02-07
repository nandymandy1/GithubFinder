/* eslint-disable */
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import React, { useReducer } from "react";
import ax from "../../services/api";
import {
  GET_REPOS,
  GET_USER,
  SET_LOADING,
  CLEAR_USERS,
  SEARCH_USERS
} from "../types";

const GithubState = props => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // SEARCH USERS
  const searchUsers = async keyword => {
    try {
      setLoading();
      let { data } = await ax.get(`/search/users?q=${keyword}`);
      if (data.items.length) {
        dispatch({ type: SEARCH_USERS, payload: data.items });
      } else {
        Toast.fire({
          icon: "error",
          title: "No result found."
        });
        dispatch({ type: SEARCH_USERS, payload: [] });
      }
    } catch ({ response }) {
      dispatch({ type: SEARCH_USERS, payload: [] });
    }
  };

  // GET USER
  const getUser = async handle => {
    try {
      setLoading();
      let { data } = await ax.get(`/users/${handle}`);
      dispatch({ type: GET_USER, payload: data });
    } catch ({ response }) {
      console.log(response.data);
      dispatch({ type: GET_USER, payload: {} });
    }
  };

  // GET REPOS
  const getUserRepos = async handle => {
    try {
      setLoading();
      let { data } = await ax.get(
        `/users/${handle}/repos?per_page=5&sort=created:desc`
      );
      dispatch({ type: GET_REPOS, payload: data });
    } catch ({ response }) {
      console.log(response.data);
      dispatch({ type: GET_REPOS, payload: [] });
    }
  };

  // CLEAR USERS
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // SET LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        users: state.users,
        repos: state.repos,
        loading: state.loading,
        getUserRepos,
        searchUsers,
        clearUsers,
        getUser
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
