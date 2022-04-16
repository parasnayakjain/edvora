import React from "react"; 
import Edvora from "./Edvora";
import "./App.css"
import DhruvSingh from "./DhruvSingh";
import Rectangle from "./Rectangle";
function Top ()
{
   return <div className="topBar">
      <Edvora></Edvora>
      <DhruvSingh></DhruvSingh>
      <Rectangle></Rectangle>
   </div>;
   
}
export default Top;