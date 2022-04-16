import React from "react"; 
import "./App.css"
import NearestRides from "./NearestRides";
import UpcomingRides from "./UpcomingRides";
import PastRides from "./PastRides";
import Filter from "./Filter";
import Vector from "./Vector";
function Top2 ()
{
   return <div className="topBar2">
       <NearestRides></NearestRides>
       <UpcomingRides></UpcomingRides>
       <PastRides></PastRides>
        <Filter></Filter>
        <Vector></Vector>

   </div>;
}
export default Top2;