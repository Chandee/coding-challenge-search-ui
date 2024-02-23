import React from "react";
import Search from "./components/Search";

type SearchResult = {
  id: string;
  title: string;
  url: string;
  description: string;
  category: "VIDEOS" | "PLAYLISTS" | "BLOG_POSTS";
};

function App() {
  return (
    <div>
      <header className="mb-10 mt-20">
        <h1 className="text-5xl text-center">Search UI Challenge</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
