import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'

function UseEffect2(props) {
  const [count, setCount] = useState(0)
  const {value} = props;
  useEffect(()=>{
    console.log("useEffect foi executado com value: ", value);
  })



  return (
    <Fragment>
      <div>
        <p>{count}</p>
        <button onClick={()=>{
          setCount(count+1)
        }}>MUDA VALOR</button>
      </div>
    </Fragment>
  )
}

export default UseEffect2
