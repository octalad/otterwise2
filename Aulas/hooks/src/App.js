import { Fragment } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import ExemploUseEffect from "./components/ExemploUseEffect/ExemploUseEffect";
import ExemploUseState from "./components/ExemploUseState/ExemploUseState";

function App() {
  return (
    <Fragment>
      {/* <ExemploUseEffect userId="2" /> */}
      <Cards
        title="TITULO"
        text="Esse card vai sumir quando eu apertar no titulo"
      />
      <Cards
        title="TITULO"
        text="Esse card vai sumir quando eu apertar no titulo"
      />
    </Fragment>
  );
}

export default App;
