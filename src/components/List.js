import React,{useState} from 'react'

export default function List() {
    const[list,setList] = useState("")
    const[data,setData] =useState([])

    let changeHandler=(e)=>{
        setList(e.target.value)
    }

    let clickHandler = () =>{
        console.log(list,data)
        let info = {list,data}
        setData((ls)=>[...ls,info])
        
    }
  return (
    <div>
      <h1>todo list</h1>
      <input placeholder='write' type="text" onChange={changeHandler} value={list}></input>
      
      <button onClick={clickHandler}>add</button>
      {data.map((item)=><div>
          <li>{item.list}</li>
      </div>)}
    </div>
  )
}

