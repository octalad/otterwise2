import { Fragment, useEffect } from "react";
import axios from "axios";

//API -> https://jsonplaceholder.typicode.com/users

function RequestUseEffect() {
  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`
      );
      console.log(response.data);
    };
    request();
  }, []);

  return (
    <Fragment>
      <p></p>
    </Fragment>
  );
}

export default RequestUseEffect;
