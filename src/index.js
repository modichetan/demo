import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navb from './Component/Navb.jsx'
import Asideb from './Component/Asideb.jsx'
import  Foots from './Component/Foots.jsx'
import Condition from './Component/Condition.jsx';
import looping from './Component/looping.jsx';
import Cards from './Component/cards.jsx';
import Practice from './Component/Practice.jsx';
import Looping2 from './Component/looping2.jsx';
import A from "./Component/A.jsx";
import B from "./Component/B.jsx";
import C from "./Component/C.jsx";
let ar={id:"1",name:"chetan"};
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
 <Cards></Cards> 
<Looping2></Looping2>*/
<>

<A>
<B></B>
  <C></C>
</A>


</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();