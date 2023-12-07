import React, { useContext, useState } from "react";
import "./scont.css"
import Cart from "./Cart";

function Assignment3(){
    let [total1,setTotal]=useState(0);
    let ar=[{id:1,prodName:"Nike",img:"https://5.imimg.com/data5/ANDROID/Default/2021/2/AE/ZM/MU/42692862/product-jpeg-500x500.jpg",price:7000,qty:0},
    {id:2,prodName:"Jordan",img:"https://t3.ftcdn.net/jpg/06/07/36/64/240_F_607366488_FuDllIi1DwaPIBsQGeQN80L6aD7y1h5x.jpg",price:5000,qty:0},
    {id:3,prodName:"Puma",img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/387769/01/sv01/fnd/IND/fmt/png/PUMAx1DER-Vegas-Men's-Shoes",price:3000,qty:0}]
    let [ar1,setArray1]=useState([])
let [ar2,setArray]=useState(ar);
let [count,setCount]=useState(1);
function minusHandler(id){
    console.log(id);
ar2.forEach((item)=>{
    if(id==item.id){item.qty!=0?item.qty=item.qty-1:item.qty=0  ;}
})
setCount(count+1);
setArray(ar2)
}
function plusHandler(id){
    ar2.forEach((item)=>{
        if(id==item.id){item.qty=item.qty+1;}
    })
    setCount(count+1);
    setArray(ar2)
    }
    function addHandler(id){


     let element=(ar2.find((item)=>{
        return item.id==id;
     }));
     if(element.qty==0)return;
     let element1=(ar1.find((item)=>{
        return item.id==id;
     }));
if(!element1){
   let ele ={...element}
    ar1.push(ele);
   
}
else{
     element1.qty+=element.qty;
}

setCount(count+1);
setArray1(ar1);
function getTotal(){
    let t=0;
    ar1.forEach((item)=>{
        t+=item.price*item.qty;
    })
    return t;
}
setTotal(getTotal());
    }
    return(<>
    <h1 style={{textAlign:"center"}}>Products</h1>
    <div class="styleOuter">   

{
    
                        ar2.map((item,i)=>{
                         
                            return <div className="styleContainer">
                                <div className="styleProdname">Product Name : {item.prodName}</div>
                            <div>
                                <img  className="styleImage" src={item.img} alt="" style={{objectFit:"contain"}} />
                            </div>
                            <div className="stylePrice">price : {item.price}</div>
                            <button className="btnss" id={item.id} style={{marginLeft:"130px"}} onClick={()=>{
                                minusHandler(item.id)
                            }}>-</button>
                            <span>-{item.qty}-</span>
                            <button  className="btnss" id={item.id} onClick={()=>{
                                plusHandler(item.id)
                            }}>+</button>
                            <br/>
                            <button  className="addbtn" style={{marginLeft:"130px"}} onClick={()=>{
                                addHandler(item.id);
                            }}>Add</button>
                            
                          </div> 
                          
                        })
}

</div>
<Cart array={ar1} total={total1}></Cart>
<h1>
</h1>
    </>)
}
export default Assignment3;