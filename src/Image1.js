import React from "react"; 
import "./App.css"

function Image1 (props)
{
   return <div className="image">
      <img src={props.url}></img>
   </div>;
}
export default Image1;