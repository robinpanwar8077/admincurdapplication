
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import {Link,Outlet } from "react-router-dom";





function Welcome() {

 
  const[input,setInput]=useState([]);
 useEffect(()=>{

    try{
 axios.get('http://localhost:3001/products').then((RESPONSE)=>{
    console.log(RESPONSE.data)
    setInput(RESPONSE.data);
 
  })
}
  catch(error){
console.log(error)
  }
},[])
  
  // useEffect(()=>{
  //   getInput();
  // },[]);
  const del =(id)=>{
    axios.delete(`http://localhost:3001/products/${id}`).then((RESPONSE)=>{
      setInput(RESPONSE.data);
    })
  }

    
  return (
    <div>
      <table>
        <tr>
          <th> #id</th>
          <th>username</th>
          <th>password</th>
        </tr>
      </table>
     {input.map((ele)=>{
        console.log("hfhf",ele)
     
     return(
      
      <div key={ele.id}>
      
      <tr key={ele.id}>
          <th> {ele.id}</th>
          <th>{ele.username}</th>
          <th>{ele.password}</th>
        </tr>
        <button onClick={()=>del(ele.id)}>delete</button>
       <Link to={`/${ele.id}/details`}> <button >Edit</button></Link>
       <Outlet />
  
     </div>
      
)})}

    </div>
  )
}


export default Welcome