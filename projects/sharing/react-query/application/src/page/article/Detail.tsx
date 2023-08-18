import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { detailArticle } from "../../api/article";

type Params = { id: string };

function Detail() {
  const { id } = useParams<Params>();

  const { status, data: result } = useQuery({
    queryKey: ["articles", id],
    queryFn: (): Promise<APIResponse<Article>> => {
      return detailArticle(id != undefined ? id : "");
    },
  });

  if (status == "loading") return <h1>Loading..</h1>;

  return (
    <div className="detail px-10 py-5">
      <div className="flex justify-start">
        <Link className="d-block text-blue-500 underline" to="/">
          back
        </Link>
      </div>
      <h1 className="text-3xl font-bold mt-6 mb-4">
        {result != undefined ? result.data.title : ""}
      </h1>
      <p>{result != undefined ? result.data.body : ""}</p>
    </div>
  );
}

export default Detail;
