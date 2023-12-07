import React, { useState } from "react";

function Assignment(){
    let [value,setValue]=useState();
    let [svalue,setSValue]=useState(0);
    let [count,setCount]=useState(0);
    let [text,setText]=useState("");
function inputHandler(e){
    setSValue(0);
    setText("");
setValue(e.target.value);
}
function submitHandler(){
    if(!value){setText("Empty field")}
    else if(value==0){setText("Enter No greater than >0")}
   else  if(value>0)
{setSValue(value);}
else{
    setText("Negative No  cant't be Added");
}
}
function incHandler(){
    if(!value){setText("Empty field")}
    svalue=Number(svalue)
    setCount(svalue+count);
}

function decHandler(){
    if(!value){setText("Empty field")}
    let c=count-svalue;
    if(c>=0)
{setCount(c);}
else{
    setText("Can't Decrement")
}
}
    return(<>
    <div style={{marginLeft:"450px", marginTop:"100px", border:"solid", width:"300px", padding:"10px", height:"150px"}}>
    <input type="number" onChange={inputHandler}/>
    <button onClick={submitHandler}>Submit</button>
    <h1>{count}</h1>
    <button onClick={incHandler}>Increment </button>
    <button onClick={decHandler}>Decrement</button>
    <br></br>
    <span style={{color:"red"}}>
{text}
    </span>
    </div>
    </>)

}
export default Assignment;