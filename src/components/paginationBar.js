import React, { useContext, useEffect, useState } from "react";
import { FetchPosts } from "../Actions";

import { PostsContext } from "../Context";

const PaginationBar = ({ allPosts, limit }) => {
  const ctx = useContext(PostsContext);
  const [pageNum, setPageNum] = useState(1);
  const [nums] = useState([]);

  useEffect(() => {
    FetchPosts(pageNum, limit, ctx.dispatch);
  }, [pageNum, ctx.dispatch, limit]);

  useEffect(() => {
    for (let i = 1; i <= Math.ceil(allPosts / limit); i++) {
      nums.push(i);
    }
  }, [limit, allPosts, nums]);

  return (
    <>
      <nav aria-label="Page navigation example" style={{ cursor: "pointer" }}>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <span
              className="page-link"
              // href="!#"
              aria-label="Previous"
              onClick={() => {
                if (pageNum !== 1) {
                  setPageNum(pageNum - 1);
                }
              }}
            >
              <span aria-hidden="true">&laquo;</span>
            </span>
          </li>
          {nums.map((elem) => {
            let active = "";
            if (elem === pageNum) {
              active = "active";
            }
            return (
              <li key={elem} className={`page-item ${active}`}>
                <span
                  className="page-link"
                  // href="!#"
                  onClick={() => {
                    setPageNum(elem);
                  }}
                >
                  {elem}
                </span>
              </li>
            );
          })}
          <li className="page-item">
            <span
              className="page-link"
              // href="!#"
              aria-label="Next"
              onClick={() => {
                if (pageNum !== Math.ceil(allPosts / limit)) {
                  setPageNum(pageNum + 1);
                }
              }}
            >
              <span aria-hidden="true">&raquo;</span>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PaginationBar;
