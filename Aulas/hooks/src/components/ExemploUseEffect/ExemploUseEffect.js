import { Fragment, useEffect, useState } from "react";
import axios from "axios";

function ExemploUseEffect(props) {
  //   const [description, setDescription] = useState([]);
  // const { userId } = props;
  //   useEffect(() => {
  //     const request = async () => {
  //       const response = await axios.get(
  //         `https://jsonplaceholder.typicode.com/posts/${userId}`
  //       );
  //       setDescription(response.data);
  //       console.log(description);
  //     };
  //     request();
  //   }, [userId]);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${type}`
      );
      setDescription(response.data);
      console.log(description);
    };
    request();
  }, [type]);

  return (
    <Fragment>
      <p>{JSON.stringify(description)}</p>
      <button onClick={() => setType("posts")}>Posts</button>
      <button onClick={() => setType("users")}>Users</button>
      <button onClick={() => setType("todos")}>Todos</button>
    </Fragment>
  );
}

export default ExemploUseEffect;
