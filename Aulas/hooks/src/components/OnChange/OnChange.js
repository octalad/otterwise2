import { Fragment, useState } from "react";

function OnChange() {
  const [valueInput, setValueInput] = useState("");

  return (
    <Fragment>
      <input
        type="text"
        onChange={(event) => {
          setValueInput(event.target.value);
        }}
      />
      <p>{valueInput}</p>
    </Fragment>
  );
}

export default OnChange;
