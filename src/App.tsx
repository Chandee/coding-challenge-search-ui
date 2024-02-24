import React from "react";
import Search from "./components/Search";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type SearchResult = {
  id: string;
  title: string;
  url: string;
  description: string;
  category: "VIDEOS" | "PLAYLISTS" | "BLOG_POSTS";
};

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header className="mb-10 mt-20">
          <h1 className="text-5xl text-center">Search UI Challenge</h1>
        </header>
        <main>
          <Search />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
