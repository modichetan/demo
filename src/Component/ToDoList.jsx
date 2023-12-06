import React from "react";
import { useState } from "react";
import CartPrint from "./CartPrint";
import "./todo.css";
function Todo(){
    let [count,setCount]=useState(1)
    let [input,setInput]=useState("");
    let [arr,setArray]=useState([]);
    let [act,setAct]=useState("");
    let [edit,setEdit]=useState(null);
    // let arr=[{id:1,text:"aaaaa"},{id:33,text:"aaasjndja"},{id:2,text:"aaasjndja"},{id:2,text:"aaasjndja"},{id:2,text:"aaasjndja"},{id:2,text:"aaasjndja"},{id:2,text:"aaasjndja"}]

    function deleteHandler(id){
        let obj=arr.find((ele)=>{
            return ele.id==id;
        })
        console.log(arr.pop(obj));
        setArray(arr);
    }
    function editHandler(id){
        let obj=arr.find((ele)=>{
            return ele.id==id;
        })
        console.log(obj);
       setAct(obj.text);
       setEdit(obj);
    }
    function clear(){
        setArray([]);
    }
    function addHandler(){
        if(!input)alert("empty input");
        else{
            if(edit){
edit.text=input;
setEdit(null);
setArray(arr);

            }
            else{
            setCount(count+1);
arr.push({id:count,text:input})
        }
        setArray(arr);}
    }
function inputHandler(e){
    // console(e.target.value);
 setAct(e.target.value)
setInput(e.target.value);
}
   
return (<>
<div className="">
<div className="second"><span>TO-DO</span>
</div>
<div className="inputbox">
<input type="text" name="" id="" placeholder="Enter Text" className="box" onChange={inputHandler} value={act}/>
<div className="container"><button className="btn1" onClick={addHandler}>{edit?"Edit":"Add"}</button><button className="btn2" onClick={clear}>Clear ALL</button></div>

</div>
</div>
 <CartPrint array={arr} deleteHandler={deleteHandler} editHandler={editHandler}></CartPrint> 
</>)
}
export default Todo;