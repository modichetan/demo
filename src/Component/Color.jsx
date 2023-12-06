import { useState } from "react";
import React from "react";

function Color(){
    let ar=["red","yellow","green","pink","grey","cyan"]
    let [color,setColor]=useState("red");
    let styles={

        backgroundColor:color,
        transition:" all 4s ease-in-out 1s",
        height:"350px",
        width:"400px"
    }
    let container={
        marginLeft:"350px",
        marginTop:"40px",
        height:"400px",
        width:"400px",
        padding:"50px",
        border:"solid",
        borderColor:"black"
    }

    return (<><div style={container}><div style={styles}></div>     
    {
       
        ar.map((ele)=>{
           return <button style={{color:"black", margin:"10px",backgroundColor:ele}}
            onClick={()=>{
                console.log(ele);
                setColor(ele);
            }}>{ele}</button>
        })
    }</div>
    </>)
}
export default Color;
