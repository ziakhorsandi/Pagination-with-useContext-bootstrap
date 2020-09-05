import React, { useContext } from "react";
import { PostsContext } from "../Context";

const Page = () => {
  const ctx = useContext(PostsContext);
  const { isLoading, posts } = ctx;
  // // console.log("isLoading", isLoading);
  if (isLoading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <ul className="list-group">
      {posts &&
        posts.map((post) => {
          return (
            <li key={post.id} className="list-group-item">
              {post.id} - {post.title}
            </li>
          );
        })}
    </ul>
  );
};

export default Page;
