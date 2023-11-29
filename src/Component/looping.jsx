import React from "react";
function looping(){
    let ar=["red","yellow","orange"];
    return (<>
        <ul>
            {ar.map((data)=>{
          return <li> {data} </li>
            })}
        </ul></>
    )
}
export default looping;