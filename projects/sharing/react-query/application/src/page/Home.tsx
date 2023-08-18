import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Article from "../component/Article";
import { listArticle } from "../api/article";

function Home() {
  const { status, data: result } = useQuery({
    queryKey: ["articles"],
    queryFn: listArticle,
  });

  if (status == "loading") return <h1>Loading..</h1>;

  return (
    <div className="home px-10 py-5">
      <div className="flex justify-start">
        <Link className="d-block text-blue-500 underline" to="/article/create">
          create
        </Link>
      </div>
      <h1 className="text-3xl font-bold mt-6 mb-4">Article App</h1>

      <ul>
        {result != undefined ? (
          result.data.map((article) => (
            <Article
              key={article.id}
              id={article.id}
              title={article.title}
            ></Article>
          ))
        ) : (
          <h1>Fetch failed.</h1>
        )}
      </ul>
    </div>
  );
}

export default Home;
