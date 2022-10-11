import React from 'react'
import { useState } from 'react'
import axios from 'axios';


function Form() {

  const[input,setInput] = useState({username:"",password:""});
  const[afckick,setAfclick] = useState(false);
  const[record,setRecord] = useState([])
 
  const Fname=(event)=>{
    const name= event.target.name;
    const value= event.target.value;
    setInput(values => ({...values, [name]: value}))

  setAfclick(false);
  }
  const fsubmit=async(event)=>{
    event.preventDefault();
    setRecord([...record,input]);
    console.log(input);
    setAfclick(true);
try{
await axios.post("http://localhost:3001/products",input).then(response=>{
   console.log(response) 
  })
}
catch(error){
  console.log(error)
}

  }
 
  return (
    
    <div id='op'>

      <form onSubmit={fsubmit}>
        <label >Name:</label>
        <input type={'text'} name='username' value={input.username} onChange={Fname}></input>
        <label>Password:</label>
      <input type={'password'} name='password' value={input.password} onChange={Fname}></input>
     <button type='submit'>submit</button>
      </form>
    {afckick?<h1>{input.username}</h1>:""}
    
  
    </div>
  )
}

export default Form