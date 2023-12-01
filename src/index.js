import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Navb from './Component/Navb.jsx'
// import Asideb from './Component/Asideb.jsx'
// import  Foots from './Component/Foots.jsx'
// import Condition from './Component/Condition.jsx';
// import looping from './Component/looping.jsx';
import Cards from './Component/cards.jsx';
// import Practice from './Component/Practice.jsx';
// import Looping2 from './Component/looping2.jsx';
// import A from "./Component/A.jsx";
// import B from "./Component/B.jsx";
// import C from "./Component/C.jsx";
//import Props from "./Component/Props.jsx"
//import Comp from './Component/Hooking.jsx';
import Color from "./Component/Color.jsx"
import SearchBar from './Component/SearchBar.jsx';
import Form from './Component/Form.jsx';
import Form2 from './Component/Forms2.jsx';
import Cards2 from './Component/Cards2.jsx';
let ar1=[{id:"1",name:"chetan"},{id:"2",name:"vignesh"},{id:"3",name:"utsav"}];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //  <App />
  // </React.StrictMode>
  /* <Navb></Navb>
<Asideb></Asideb>
<Foots></Foots> 
<Condition/>
<Practice></Practice> <looping></looping> 

<Looping2></Looping2>
<A>
<B></B>
  <C></C>
</A>
<Props arr={ar1}></Props> <Comp></Comp><Color></Color> 
 
<Color></Color><Cards></Cards> <SearchBar></SearchBar>
<Form2></Form2>*/
<>
<Cards></Cards>
</>
);

reportWebVitals();