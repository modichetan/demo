import React, { useState } from "react";
import './Assignment3.css'
function Cart({array,total}){
    if(array.length==0){ console.log("jjjjhhh"); return <><h1>Empty Cart</h1></>}
return <>
<div className="cart">
    <h1>Cart</h1>
    <div class="styler">   
{
    
                        array.map((item,i)=>{
                         
                            return <div className="daba">
                                <div><img  className="styleImages" src={item.img} alt="" /></div>
                                <div className="details">
                                <div className="">Product Name : {item.prodName}</div>
                                <div className="">price : {item.price}</div>
                                <span  >Quantity-{item.qty}</span>
                                </div>
                           </div>
                          
                        })
}
<h1>Total={total}</h1>
</div>
</div>


</>
}
export default Cart;