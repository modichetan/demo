import React from "react";
import { useState } from "react";
function Form2(){
    let [form,setForm]=useState({name:"",pass:"",email:"",confirm:"",course:"",feedback:""});
    function commonHandler(e){ 
        let {name,value}=e.target;
        setForm((pre)=>{
            return {...pre,[name]:value};
        })
    }
    function submit(){
        console.log(form);
    }
    return (<>
    username: <input type="text" placeholder="Enter yout username" onChange={commonHandler} name="name"></input>
    email: <input type="text" placeholder="Enter yout email" onChange={commonHandler} name="email"></input>
    pass: <input type="password" placeholder="Enter yout password" onChange={commonHandler} name="pass"></input>
    confirm_pass: <input type="password" placeholder="Enter yout password again" onChange={commonHandler} name="confirm"></input>
    <br>
    </br>
   course: <select onChange={commonHandler} name="course">
        <option>Html</option>
        <option>css</option>
        <option>reactjs</option>
        <option>Html</option>
    </select>
    <textarea rows="10" cols="10" placeholder="enter your feedback" onChange={commonHandler} name="feedback"></textarea>
    <button onClick={submit}>Submit</button>
    </>)
}
export default Form2;