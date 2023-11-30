import React from "react";
function Props({arr}){
   

    return (<>
<div>
    <ul>
        {
            arr.map((ele)=>{
                return <>
               <li>id: {ele.id}</li>
               <li>name: {ele.name}</li>
               <br></br>
               <hr></hr></>
            })
        }
    </ul>
</div>


    </>)
}
export default Props;