import React from "react";
import { useState } from "react";
function Box({toggleHandler}){
    let [text1,setText1]=useState("");
    let [text2,setText2]=useState("");
    let [text3,setText3]=useState("");
   // let [val,setVal]=useState("");
    let [s,setS]=useState(false);
    let [s1,setS1]=useState(false);
    let [s2,setS2]=useState(false);
    function okHandler(){
        
if(s&&s1&&s2){toggleHandler();alert("added");}
else{
    if(!s)setText1("Empty");
    if(!s1)setText2("Empty");
    if(!s2)setText3("Empty");
}
    }
function usernameHandler(e){
    if(e.target.value.length<5 ){setText1("length should be>5");setS(false);}
    else if(Number.isInteger(parseInt(e.target.value.charAt(0)))){setText1("Username can't Start with No");setS(false);}
    else {setText1("");setS(true);}

}
function passwordHandler(e){
    if(e.target.value.length<5){setText2("length should be>5");setS1(false)}
    else {setText2("");setS1(true)}
}
function priceHandler(e){
    if(e.target.value<=0){setText3("price should be >0");setS2(false)}
    if(e.target.value>0){setText3(" ");setS2(true)}
}
function cancelHandler(){
    toggleHandler();
}

return(<>
<div style={{display:"flex", flexDirection:"column", width:"250px",marginLeft:"500px",marginTop:"100px",borderStyle:"solid",borderColor:"grey"}}>
    
<input type="text" style={{marginTop:"10px",marginLeft:"10px",marginRight:"10px"}} placeholder="enter Username" onChange={usernameHandler} />
<span style={{height:"3px",marginBottom:"8px",marginLeft:"15px",color:"red"}} >{text1}</span>
<input   type="password" placeholder="enter password"style={{marginTop:"10px",marginLeft:"10px",marginRight:"10px"}} onChange={passwordHandler} ></input>
<span style={{height:"3px",marginBottom:"8px",marginLeft:"15px",color:"red"}}>{text2}</span>
<input  type="number" placeholder="enter price" style={{marginTop:"10px",marginLeft:"10px",marginRight:"10px"}} onChange={priceHandler}></input>
<span style={{height:"3px",marginBottom:"8px",marginLeft:"15px",color:"red"}}>{text3}</span>
<button style={{margin:"10px"}} onClick={cancelHandler}>Cancel</button>
<button style={{margin:"10px"}} onClick={okHandler} >Ok</button>

</div>
</>)
}
export default Box;