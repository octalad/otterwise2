import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  return (
    <div>
      <h1>Ola, você esta na home!</h1>
      <Link to="/posts">Ir para os Posts</Link>
      <Link to="/comments"></Link>
    </div>
  );
}

export default Home;
