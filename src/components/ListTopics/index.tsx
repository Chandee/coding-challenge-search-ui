import react from "react";
import Topic from "../Topic";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type SearchResult = {
  id: string;
  title: string;
  url: string;
  description: string;
  category: "VIDEOS" | "PLAYLISTS" | "BLOG_POSTS";
};

type ListTopicsType = {
  topics: SearchResult[];
  isPending: boolean;
};
const ListTopics = ({ topics, isPending }: ListTopicsType) => {
  if (isPending) {
    return (
      <div className="max-w-[500px] m-auto mt-4 h-28">
        <Skeleton className="h-full" />
      </div>
    );
  }

  if (topics?.length === 0) {
    return (
      <div className="m-auto mt-4 p-4 text-center">
        There are no results matching your query.
      </div>
    );
  }

  return (
    <ul>
      {topics?.map((t: SearchResult) => {
        return <Topic key={t.id} {...t} />;
      })}
    </ul>
  );
};

export default ListTopics;
