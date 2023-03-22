import { useState } from "react";

function ExemploUseState() {
  //   const [name, setName] = useState([]);
  //   const [count, setCount] = useState(0);
  const [name, noName] = useState(["Octavio", ""]);
  console.log(name);
  return (
    <div>
      {/* <p>{name}</p>
      <button onClick={() => setName()}>Muda Ladeira</button>
      <button onClick={() => setName("Octavio")}>Muda Octavio</button> */}

      {/* <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button> */}
      <p>{name}</p>
      <button
        onClick={() => {
          name === "" ? noName("Octavio") : noName("");
        }}
      >
        Botão
      </button>
    </div>
  );
}

export default ExemploUseState;
