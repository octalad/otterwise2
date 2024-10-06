import { Fragment } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import ExemploUseEffect from "./components/ExemploUseEffect/ExemploUseEffect";
import ExemploUseState from "./components/ExemploUseState/ExemploUseState";
import UseEffect2 from "./components/UseEffect2/UseEffect2";
import RequestEffState from "./components/RequestEffState/RequestEffState";
import OnChange from "./components/OnChange/OnChange";
import ExemploUseReducer from "./components/ExemploUseReducer/ExemploUseReducer";

function App() {
  return (
    <Fragment>
      <ExemploUseReducer />
    </Fragment>
  );
}

export default App;
