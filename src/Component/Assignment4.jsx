import React from "react";
import Box from './Box.jsx';
import { useState } from "react";
function Assignment4(){
    let [toggle,setToggle]=useState(true);
    function toggleHandler(){
        setToggle(!toggle);
    }
    if(toggle){
return<>
<button onClick={toggleHandler} style={{marginTop:"100px",marginLeft:"590px",height:"30px",borderRadius:"3px",color:"green",borderColor:"green"}}> Toggle</button></>
    }
 return(<>
 <button onClick={toggleHandler} style={{marginTop:"100px",marginLeft:"590px",height:"30px",borderRadius:"3px",color:"red",borderColor:"red"}}>Toggle</button>
<Box toggleHandler={toggleHandler}></Box>


 </>)


}
export default Assignment4;
