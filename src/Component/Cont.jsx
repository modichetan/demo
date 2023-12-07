import React, { useContext } from "react";
import { contextData } from "..";
function Cont(){
    let d=useContext(contextData);
return (<><h1>{d.name}</h1></>)
}
export default Cont;    