import { Fragment, useEffect, useState } from "react";

function Cards(props) {
  const { title, text } = props;
  const [isOn, setOff] = useState(true);
  return (
    <Fragment>
      <div>
        {isOn ? (
          <h3
            onClick={() => {
              setOff(false);
            }}
          >
            {title}
          </h3>
        ) : (
          ""
        )}
        {isOn ? <p>{text}</p> : ""}
      </div>
    </Fragment>
  );
}

export default Cards;
