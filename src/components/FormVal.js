import React,{useState,useRef} from 'react'

export default function Form() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[data,setData]=useState([])
  const inputRef = useRef("")

  let nameHandler =(e)=>{
     setName(e.target.value);
  }

  let emailHandler =(e)=>{
    setEmail(e.target.value)
  }

  let passwordHandler = (e)=>{
    setPassword(e.target.value)
  }

  let clickHandler =(e)=>{
    e.preventDefault();
   
    let info = {name,email,password}
    setData([...data,info])
     setName("")
     setEmail("")
     setPassword("")

  }
  return (
    <div>
     
     <form>
          <input type="text" placeholder='name' onChange={nameHandler} value={name} ref={inputRef}></input><br></br>
          <input type="email" placeholder='email' onChange={emailHandler} value={email} ref={inputRef}></input><br></br>
          <input type="password" placeholder='password' onChange={passwordHandler} value={password} ref={inputRef} ></input><br></br>
          <button onClick={clickHandler}>submit</button>
          </form>
          {data.map((item)=><div key={Date.now()}>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.password}</li>
          </div>)}

         
      
    </div>
  )
}
