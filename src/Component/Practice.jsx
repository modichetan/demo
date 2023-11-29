import React from "react";
import p from "../images/p.avif"
const Practice=()=>{
    let fruit=["apple","grapes","banana","chikoo"];
    let student={name:"Chetan",age:24,address:"Sunam"};
    let keys=[];
   
    for( let i in student){
keys.push(i);
    }
let ar=[];
    return (<>
<h1>Hello World</h1>
<p>
    Jspiders
</p>
{
    keys.map((ele)=>{
        return <li>{ele} is: {student[ele]}</li>
    })
    

}

<img style={{boxShadow:"0 0 15px black",marginLeft:"100px",marginTop:"10px",height:"450px",width:"450px"}} src="https://img.freepik.com/free-photo/butterfly-flying-vibrant-natures-colorful-patterns-generative-ai_188544-8128.jpg">
</img>
<img src={p} style={{boxShadow:"0 0 15px black",marginLeft:"100px",marginTop:"10px",height:"450px",width:"450px"}}>
</img>
    </>)
}
export default Practice;