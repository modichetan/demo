import React from "react";

function Condition(){
    let x=5;
  return  (function (){
    if(x<2)return <h1>Hello Yellow</h1>
    else return <h1>Hi</h1>
   }())

}
export default Condition;