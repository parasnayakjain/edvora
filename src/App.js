import React, { useEffect, useState } from "react"
import Middle from "./Middle";

import Top from "./Top";
import Top2 from "./Top2";


function App()
{
  return <div className="page">
     <Top ></Top>
     <Top2></Top2>
     <Middle></Middle> 
      
      </div>
 
}
export default App;



























// const UsingFetch = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     fetch("https://assessment.api.vweb.app/users")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
// 		console.log(data);
//       })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])
//   console.log("a");
//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>{user.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default UsingFetch;
