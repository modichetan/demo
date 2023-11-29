import React from "react";
function Looping2(){
let arr=[{name:"utsav",role:"fullstack"},{name:"vicky",role:"backend"},{name:"kishor",role:"web"}]
let globalarr=[];
arr.forEach((ele)=>{
    globalarr.push(<li>Name : {ele.name}</li>,<li>Role : {ele.role}</li>,<br></br>,<hr></hr>)//this is one element.
})
return (<>
<div>
    <ul>
    
            {globalarr}
      
    </ul>
</div>
</>

)
}
export default Looping2;