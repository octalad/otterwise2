import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Ola, você esta na home!</h1>
      <Link to="/posts">Ir para os Posts</Link>
    </div>
  );
}

export default Home;
