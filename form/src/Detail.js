import axios from 'axios';

import {useEffect, useState} from 'react'

function Detail(props) {
    const[input ,setInput]= useState({});
    const[record,setRecord]=useState([]);
    const[afckick,setAfclick] = useState(false);

    const fname=((event)=>{
        const name=event.target.name;
        const value =event.target.value;
        setInput(values => ({...values, [name]: value}))
        setAfclick(false);
    })
    useEffect(()=>{

      try{
    axios.get(`http://localhost:3001/products/${props.match.params.id}`).then((RESPONSE)=>{
      console.log(RESPONSE.data)
      setInput(RESPONSE.data);
      setRecord([...record,input]);
    })
    }
    catch(error){
    console.log(error)
    }
    },[])

    const fsubmit=async(event)=>{
      event.preventDefault();
      setRecord([...record,input]);
      console.log(input);
      setRecord([...record,input]);
      setAfclick(true);
try{
  await axios.post(`http://localhost:3001/products/${props.match.params.id}`,input).then(response=>{
    console.log(response);})
  }
  catch(error){
    console.log(error)
  }
}

  return (
    <div><form onSubmit={fsubmit}>
        <label>Name:</label>
        <input type={'text'} name='username' value={input.username} onChange={fname} id={input.username}></input>
        {/* defaultValue={input}; */}
        
        <label>Password:</label>
        <input type={'password'} name='password' value={input.password} onChange={fname} id={input.password}></input>
        
        <button type='submit' >submit</button>
        
        </form>
        
        {afckick?<h1>{input.username}</h1>:""}
        </div>
  )
  }

export default  Detail