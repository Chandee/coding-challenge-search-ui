import React from "react";
import Search from "./components/Search";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="px-6">
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
