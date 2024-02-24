import Topic, { categoriesType } from "../Topic";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type SearchResult = {
  id: string;
  title: string;
  url: string;
  description: string;
  category: categoriesType;
};

type ListTopicsType = {
  topics: SearchResult[] | undefined;
  isPending: boolean;
  error: Error | null;
};
const ListTopics = ({ topics, isPending, error }: ListTopicsType) => {
  if (error) {
    return (
      <div className="m-auto mt-4 p-4 text-center">
        An error occurred in the request, please try again.
      </div>
    );
  }

  if (isPending) {
    return (
      <div
        className="max-w-[500px] m-auto mt-4 h-28"
        aria-label="loading"
        data-testid="loading"
      >
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
