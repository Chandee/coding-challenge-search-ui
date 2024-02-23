import React from "react";

const SearchInput = () => {
  return (
    <div className="flex gap-4 h-10 w-full max-w-[500px] m-auto">
      <input
        type="text"
        className="w-full bg-white/20 py-2 pl-4 pr-4 rounded-lg focus:outline-none border-2 border-gray-200 focus:border-sky-300 transition-colors duration-300"
        placeholder="Search..."
      />
      <button className="px-7 py-1 shadow-md shadow-gray-500/50 bg-black text-white rounded-lg cursor-pointer active:scale-[.99] hover:scale-[1.02] transition-all">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
