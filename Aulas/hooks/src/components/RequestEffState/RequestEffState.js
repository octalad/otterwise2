import { useEffect, Fragment, useState } from "react";
import axios from "axios";

function RequestEffState() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${count}`
      );
      console.log(response.data);
    };
    request();
  }, [count]);

  return (
    <Fragment>
      <div>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          MUDA VALOR
        </button>
      </div>
    </Fragment>
  );
}

export default RequestEffState;
