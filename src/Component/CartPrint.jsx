import React from "react";
import './cart.css'

function CartPrint({array,editHandler,deleteHandler}){
    if(array.length==0){ console.log("jjjjhhh"); return <><h1>No Cards To Show </h1></>}
    else{
return (<>
<div class="styleOuter">   
{
    
                        array.map((item)=>{
                            return <div className="styleContainer">
                                <div className="styleProdname">Id: {item.id}</div>
                            <div className="para">
                                <p>{item.text}</p>
                            </div>
                            <div className="editdelete">
                                <button className="edit" onClick={()=>{editHandler(item.id)}}>Edit</button>
                                <button className="delete" onClick={()=>{deleteHandler(item.id)}}>delete</button>
                                </div>
                          </div> 
                        })
}
</div>
</>)}
}
export default CartPrint;