import { Fragment } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import ExemploUseEffect from "./components/ExemploUseEffect/ExemploUseEffect";
import ExemploUseState from "./components/ExemploUseState/ExemploUseState";
import UseEffect2 from "./components/UseEffect2/UseEffect2";
import RequestUseEffect from "./components/RequestUseEffect/RequestUseEffect";

function App() {
  return (
    <Fragment>
      <UseEffect2 value={4} valuet={2} />
      <RequestUseEffect />
    </Fragment>
  );
}

export default App;
