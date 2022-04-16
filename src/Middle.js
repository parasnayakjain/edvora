import React, { Component } from "react"; 
import "./App.css"


import Rate from "./Rate";
import CityName from "./CityName";
import Origin from "./Origin";
import Station from "./Station";
import Date from "./Date";
import Distance from "./Distance";
import Image1 from "./Image1";




 
class Middle extends Component{

   constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          DataisLoaded: false
      };
  }


componentDidMount() {
   fetch(
    "https://assessment.api.vweb.app/rides")
       .then((res) => res.json())
       .then((json) => {
           this.setState({
               items: json,
               DataisLoaded: true
           });
       })
}
 render()
 {
   const { DataisLoaded, items } = this.state;
   if (!DataisLoaded) return <div>
   <h1> Pleses wait some time.... </h1> </div> ;

   else{
    return <div>
        
     {   items.map((item) => ( 
        <div className="box">
                <ol key = { item.id } >
                     <Image1 url={item.map_url}></Image1>
                     <Rate rate={item.id}></Rate>
                     <CityName city={item.city}></CityName>
                     <Origin origin={item.origin_station_code}></Origin>
                     <Station station_path={item.station_path}></Station>
                     <Date></Date>
                     <Distance></Distance>
                    </ol>
        </div>
        ))
     }
       
 
 
    </div>;
 }
}
}

 


export default Middle;