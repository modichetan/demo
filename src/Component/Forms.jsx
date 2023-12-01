import React from "react";
import { useState } from "react";
function Forms(){
    let [name,setName]=useState('');
    let [pass,setPassword]=useState(" ")
    let [email,setEmail]=useState(" ")
    let [confirm,setConfirmPassword]=useState(" ")
    let [course,setCourse]=useState(" ")
    let [feedback,setFeedback]=useState(" ")
    function unameHandler(e){
        setName(e.target.value);
    }
    function submit(){
        console.log(name,pass,email,course,feedback);
    }
    function cpassHandler(e)
{
    setConfirmPassword(e.target.value);
}
function passHandler(e)
{
    setPassword(e.target.value);
}
function emailHandler(e)
{
    setEmail(e.target.value);
}
function courseHandler(e)
{
    setCourse(e.target.value);
}
    return (<>
    username: <input type="text" placeholder="Enter yout username" onChange={unameHandler}></input>
    email: <input type="text" placeholder="Enter yout email" onChange={emailHandler}></input>
    pass: <input type="password" placeholder="Enter yout password" onChange={passHandler}></input>
    confirm_pass: <input type="password" placeholder="Enter yout password again" onChange={cpassHandler}></input>
    <br>
    </br>
   course: <select onChange={courseHandler}>
        <option>Html</option>
        <option>css</option>
        <option>reactjs</option>
        <option>Html</option>
    </select>
    <textarea rows="10" cols="10" placeholder="enter your feedback"></textarea>
    <button onClick={submit}>Submit</button>
    </>)
}
export default Forms;