 import React, { createRef, useRef, useState } from "react";
 function  Uncontrol(){
 
let input=createRef(1);
function incrementHandler(){
    console.log(input.current.value);
}
   
    return (<>
    <input type="text" ref={input}></input>
    <button onClick={incrementHandler} >INCS</button>
    </>)
 }
 export default Uncontrol;