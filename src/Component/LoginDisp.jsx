import React, { useState } from "react";
import './logindsp.css';
function Login(){
    let arr=[{username:"chean",phonno:"4566977"},{username:"chean",phonno:"4586666977"}];
let [ar,setArray]=useState([]);
let [usespan,setUsespan]=useState({text:"",color:"red"});
let [usespanpass,setUsespanpass]=useState({text:"",color:"red"});
let [usespancpass,setUsespancpass]=useState({text:"",color:"red"});
let [usephone,setUsephone]=useState({text:"",color:"red"});

let [names,setName]=useState("");
function nameHandler(e) {setName(e.target.value);}
let [password,setPassword]=useState("");
function passwordHandler(e) {setPassword(e.target.value);}
let [cpassword,setcPassword]=useState("");
function cpasswordHandler(e)  {setcPassword(e.target.value);}
let [phno,setPhone]=useState();
function phoneNoHandler(e){  setPhone(e.target.value);}

function submitHandler(event){
    event.preventDefault();
// if(phno.length!=10){usephone.text="phone no length=10 only";setUsephone(usephone)}
// if(name.length<8 ){console.log("sok");usespan.text="sername<8";setUsespan(usespan);}
// if(password.length<7){usespanpass.text="short pass min length=7";setUsespanpass(usespanpass);}
// if(password!==cpassword){usespancpass.text="password mismatch";setUsespancpass(usespancpass);}
console.log(names);
ar.push({username:names,phonno:phno});
console.log(ar);
setArray(ar);


}
return (<>
<div>
<form action="" className="cont">
    <label>
        Username:
        <input type="text" name="username" placeholder="enter username" onChange={nameHandler}></input>
    </label>
    <span className="spans" style={{color:usespan.color}}>{usespan.text}</span>
    <label >
        Password:  
        <br></br> 
       <input  name="password" type="password" placeholder="enter password" onChange={passwordHandler}></input>
    </label>
    
    <span className="spans" style={{color:usespanpass.color}}>{usespanpass.text}</span>
    <label>
       Confirm password:
    </label>
    <input type="password" name="cpass" placeholder="confirm password" onChange={cpasswordHandler}></input>
    <span className="spans" style={{color:usespancpass.color}}>{usespancpass.text}</span>
    <label >
     Phone No.
     <input  name="ph" type="number" placeholder="enterPhone" onChange={phoneNoHandler}></input>
    </label>
    <span className="spans" style={{color:usephone.color}}>{usephone.text}</span>
  {/* //  <button  className="submitbtn" onClick={submitHandler}>Submit</button> */}
    
<input type="submit" className="submitbtn" onClick={submitHandler}></input>
</form>
</div>

<div className="styleOuter">   
{
    
                        ar.map((item)=>{
                            return <div className="styleContainer">
                                <div className="name">Name : {item.username}</div>
                            <div className="phno">phoneno: {item.phonno}</div>
                          </div> 
                          
                        })
}
</div>
</>)


}
export default Login;