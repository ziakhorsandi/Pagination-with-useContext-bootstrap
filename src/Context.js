import React, { useState, useReducer, useEffect } from "react";
import { initialState, Reducer } from "./Reducer";
export const PostsContext = React.createContext(null);

const Provider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [myState, setMyState] = useState({
    ...initialState,
    dispatch: dispatch,
  });

  // EVERY TIME THE REDUCER CHANGE ITS STATE
  useEffect(() => {
    setMyState({
      ...state,
      dispatch,
    });
  }, [state]);

  return (
    <PostsContext.Provider value={myState}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default Provider;
