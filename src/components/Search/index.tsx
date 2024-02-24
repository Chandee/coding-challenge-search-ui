import React, { useEffect, useRef, useState } from "react";
import SearchInput from "../SearchInput";
import ListTopics from "../ListTopics";
import { getTopicsData } from "../../utils/request";
import { useQuery } from "react-query";

const Search = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getTopic"],
    enabled: false,
    queryFn: () => getTopicsData(inputRef.current?.value || ""),
  });

  return (
    <div>
      <SearchInput inputRef={inputRef} refetch={refetch} />
      <ListTopics topics={data?.data} />
    </div>
  );
};

export default Search;
