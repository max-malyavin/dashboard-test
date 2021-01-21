import React, { createContext, useReducer } from "react";

import { sitesAPI } from "../api/sitesAPI";
import { testsAPI } from "../api/testsAPI";
import AppReducer from "./AppReducer";
import {
  GET_SITES,
  SITES_ERROR,
  GET_TESTS,
  TESTS_ERROR,
  GET_TEST,
  TEST_ERROR,
} from "./Constants";

const initialState = {
  sites: null,
  tests: null,
  headingColumns: ["NAME", "TYPE", "STATUS", "SITE"],
  currentResults: null,
  currentFinalize: null,
  error: null,
  loading: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getSites() {
    try {
      const res = await sitesAPI.get();
      dispatch({
        type: GET_SITES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SITES_ERROR,
        payload: "Error",
      });
    }
  }
  async function getTests() {
    try {
      const res = await testsAPI.get();
      dispatch({
        type: GET_TESTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TESTS_ERROR,
        payload: "Error",
      });
    }
  }

  async function getTest(id, currentResult) {
    try {
      const res = await testsAPI.getID(id);

      dispatch({
        type: GET_TEST,
        payload: res.data,
        currentR: currentResult,
      });
    } catch (err) {
      dispatch({
        type: TEST_ERROR,
        payload: "error",
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        sites: state.sites,
        tests: state.tests,
        currentResults: state.currentResults,
        currentFinalize: state.currentFinalize,
        getSites,
        getTests,
        getTest,
        error: state.error,
        headingColumns: state.headingColumns,
        loading: state.loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
