import { useState } from "react";
import React from "react";

function Comp(){
      let [count,setCount]=useState(1);
function incr(){
    setCount(count+1);
    count++;
}
    return (<><h1>{count}</h1>
    <button onClick={incr}>Inc</button></>)
}
export default Comp;
