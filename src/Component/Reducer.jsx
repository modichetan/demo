import React from "react";
import { useReducer } from "react";

function Component1(){
    function reducer(state,action){
if(action.type=="inc"){
    return state+1;
}
if(action.type=="dec"){
    return state-1;
}
    }
    let [state,dispatch]=useReducer(reducer,1);
    return (<>
    <h1>{state}</h1>
    <button onClick={()=>{
dispatch({type:"inc"})
    }}>Increment</button> <button onClick={()=>{
        dispatch({type:"dec"})
            }}>Decrement</button></>)
    
}
export default Component1;