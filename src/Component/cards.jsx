import React from "react";
import "./styleOuter.css";
function Cards(){
    
    let arr=[{id:1,prodName:"Nike",img:"https://5.imimg.com/data5/ANDROID/Default/2021/2/AE/ZM/MU/42692862/product-jpeg-500x500.jpg",price:7000},
    {id:2,prodName:"Adidas",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhNJG681TT52Ncf_qnwe0I7Yoc4O00m1NBw&usqp=CAU",price:5000},
    {id:3,prodName:"Puma",img:"https://www.shutterstock.com/image-photo/varna-bulgaria-octomber-12-2019-260nw-1566594391.jpg",price:3000},
    {id:4,prodName:"Asics",img:"https://www.shutterstock.com/image-photo/zhlobin-belarus-january-10-2021-260nw-1914413809.jpg",price:7000},
    {id:5,prodName:"Jordan",img:"https://i.insider.com/5cca03b0021b4c26a527c8f6?width=700",price:500000},
    {id:6,prodName:"New Balance",img:"https://5.imimg.com/data5/ANDROID/Default/2022/5/CU/AO/CU/147549885/product-jpeg.jpg",price:14000},
    {id:7,prodName:"Nike",img:"https://5.imimg.com/data5/ANDROID/Default/2021/2/AE/ZM/MU/42692862/product-jpeg-500x500.jpg",price:7000},
    {id:8,prodName:"Adidas",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhNJG681TT52Ncf_qnwe0I7Yoc4O00m1NBw&usqp=CAU",price:5000},
    {id:9,prodName:"Puma",img:"https://www.shutterstock.com/image-photo/varna-bulgaria-octomber-12-2019-260nw-1566594391.jpg",price:3000},
    {id:10,prodName:"Asics",img:"https://www.shutterstock.com/image-photo/zhlobin-belarus-january-10-2021-260nw-1914413809.jpg",price:7000},
    {id:11,prodName:"Jordan",img:"https://i.insider.com/5cca03b0021b4c26a527c8f6?width=700",price:500000},
    {id:12,prodName:"New Balance",img:"https://5.imimg.com/data5/ANDROID/Default/2022/5/CU/AO/CU/147549885/product-jpeg.jpg",price:14000}]
    return (<>
<div>
<div class="styleOuter">   
{
                        arr.map((item,i)=>{
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
</div>




       </>
    )
}
export default Cards;