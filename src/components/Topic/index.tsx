import react from "react";

type categoriesType = "VIDEOS" | "PLAYLISTS" | "BLOG_POSTS";

type topicType = {
  title: string;
  description: string;
  category: categoriesType;
  url: string;
};

const Topic = ({ title, description, category, url }: topicType) => {
  const categoryMap = {
    VIDEOS: "Videos",
    PLAYLISTS: "Playlists",
    BLOG_POSTS: "Blog Posts",
  };

  return (
    <li className="rounded-lg shadow-lg max-w-[500px] m-auto mt-4 p-4">
      <a href={url} target="_blank" className="h-full w-full">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-base">{description}</p>
          <span className="center inline-block rounded-lg bg-gray-500 py-2 px-3.5 text-xs font-bold text-white mt-6">
            {categoryMap[category as categoriesType]}
          </span>
        </div>
      </a>
    </li>
  );
};

export default Topic;
