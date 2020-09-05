// import React from "react";

import axios from "axios";

export const FetchPosts = (pageNum, limit, dispatch) => {
  dispatch({ type: "ISLOADING" });
  axios
    .get(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=${limit}`
    )
    .then((res) => {
      dispatch({ type: "FETCH_POST", payLoad: res.data });
    })
    .catch((err) => {
      console.error("error :", err);
      dispatch({ type: "FETCH_POST_FAIL" });
    });
};
