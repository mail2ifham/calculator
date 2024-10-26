import React, { useEffect, useReducer, useState } from "react";
import reducer from "./reducer";

function useLocalStorage(key, defaultValue) {
  let initialState;
  function init(initialState) {
    try {
      initialState = JSON.parse(localStorage.getItem(key) || defaultValue);
    } catch (e) {
      console.log(e);
      initialState = defaultValue;
    }
    return initialState;
  }

  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state.name, key]);

  return [state, dispatch];
}

export default useLocalStorage;
