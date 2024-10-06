import { Fragment, useReducer } from "react";

function ExemploUseReducer() {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
        break;
      case "decrement":
        return { count: state.count - 1 };
        break;
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </Fragment>
  );
}

export default ExemploUseReducer;
