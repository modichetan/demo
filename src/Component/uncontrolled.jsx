 import React, { createRef, useRef, useState } from "react";
 function  Uncontrol(){
 
let input=createRef(1);
let [val,setVal]=useState(3);
let data=1;
function incrementHandler(){
console.log(input.current);
}
function inc(){
setVal(val+1);
}
   function datahandler(){
    input.current++;
    console.log(input.current)
   }
    return (<>
    <input type="text"  ref={input}></input>
    <h1>{val}</h1>
    <button onClick={inc}>INCEMENT</button>
<button onClick={datahandler}>data</button>
    <button onClick={incrementHandler} >INCS</button>
    </>)
 }
 export default Uncontrol;