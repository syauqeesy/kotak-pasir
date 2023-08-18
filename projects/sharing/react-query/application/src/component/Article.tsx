import { Link } from "react-router-dom";

type ArticleProps = {
  id: string;
  title: string;
};

function Article({ id, title }: ArticleProps) {
  return (
    <li className="article mb-1">
      <Link to={`/article/${id}`} className="cursor-pointer text-xl underline">
        {title}
      </Link>
    </li>
  );
}

export default Article;
