import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { listAllPosts, getPost } from "../services/posts";

function Posts() {
  const [data, setData] = useState("");
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  // console.log(userId);

  useEffect(() => {
    const request = async () => {
      const response = id ? await getPost(id) : await listAllPosts({ userId });
      setData(response.data);
    };
    request();
  }, []);

  if (!data) return <p>Não a posts</p>;
  if (id) return <p>{data.title}</p>;

  return data.map((posts) => <p>{posts.title}</p>);
}

export default Posts;
