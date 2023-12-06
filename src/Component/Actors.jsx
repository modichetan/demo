import React, { useCallback, useState } from "react";
import './actor.css'
function Actors(){
    let arr=[{img:"https://static.javatpoint.com/top10-technologies/images/top-10-south-indian-actors1.png",gender:'Male'},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GdI7UFHMNNQXErHbnJiRUD3lXOJabimQ6UZIWK2w&s",gender:'Male'},
{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIG9ASWD5kvgF90N_4VvF6BU_jY90HcEaxx2GpIo&s",gender:"Female"}];
    let [ar,setArray]=useState(arr);
    function mensHandler(){
        let ak=arr.filter((ele)=>{
            return ele.gender==="Male";
        })
        setArray(ak);
    }
    function womensHandler(){
        let ak=arr.filter((ele)=>{
            return ele.gender==="Female";
        })
        setArray(ak);
    } function allHandler(){
        setArray(arr);
    }
return(<>
<div className="btnss">
    <button className="btns3" onClick={allHandler}>ALL</button>
<button className="btns1" onClick={mensHandler}>Mens</button>
<button className="btns2" onClick={womensHandler}>Women</button>
</div>
<div className="cont">{
                            ar.map((item,i)=>{
                            return <div className="card-cont">
                            <div>
                                <img  className="Image" src={item.img} alt="" />
                            </div>
                            <div className="gender">Gender: {item.gender}</div>
                          </div>  
                        })}
</div>
</>)
}
export default Actors;