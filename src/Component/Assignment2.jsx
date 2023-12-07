import React, { useContext, useState } from "react";
import { contextData } from "../index.js";
import scont from "./scont.css"

function Assignment2(){
let arr=useContext(contextData);
let [input,setInput]=useState();
let [ar,setArray]=useState(arr);
let [count,setCount]=useState(1);
function inputHandler(e){
if(!e.target.value)setArray(arr);
let ar=arr.filter((ele)=>{
   let rs= ele.prodName.toLowerCase();
    return rs.includes(e.target.value);
})
setArray(ar);
}
function selectHandler(e){
if(e.target.value=="Name"){
ar.sort((a,b)=>{
   let aname= a.prodName.toUpperCase();
   let bname= b.prodName.toUpperCase();
   if(aname<bname){
    return -1;
}
if(aname>bname){
    return 1;
}
if(aname==bname){
    return 0;
}
})

console.log(ar);
setArray(ar);
setCount(count+1);
}
else if(e.target.value=="Price"){
    ar.sort((a,b)=>{
       let aname= a.price;
       let bname= b.price;
       if(aname<bname){
        return -1;
    }
    if(aname>bname){
        return 1;
    }
    if(aname==bname){
        return 0;
    }
    })
    
console.log(ar);
    setArray(ar);
    setCount(count+1);
    }}

return(<>
<div className="box">
<input type="text" onChange={inputHandler} />
<span>Sort By</span>
<select onChange={selectHandler}>
<option>
       Select
    </option>
    <option>
        Price
    </option>
    <option>
      Name
    </option>
</select>
</div>
<div class="styleOuter">   

{
    
                        ar.map((item,i)=>{

                            return <div className="styleContainer">
                                <div className="styleProdname">Product Name : {item.prodName}</div>
                            <div>
                                <img  className="styleImage" src={item.img} alt="" />
                            </div>
                            <div className="stylePrice">price : {item.price}</div>
                          </div> 
                          
                        })
}
</div>



</>)

}
export default Assignment2;