import React from "react";

import PaginationBar from "./components/paginationBar";
import Page from "./components/page";
import Provider from "./Context";

function App() {
  return (
    <Provider>
      <div className="App container py-4">
        <h1 className="text-primary mb-4">Posts Titles</h1>
        <Page />
        <div className="mt-4">
          <PaginationBar allPosts={100} limit={10} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
