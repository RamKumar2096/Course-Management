import axios from 'axios'
import React, { useEffect, useState } from 'react'


const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {"content-type":"application/json"}
})
const HomePage = () => {
const [activeCount, setactiveCount]=useState(0)
const [inactiveCount, setinactivecount] = useState(0)

const getdata=()=>{
  api.get("courses").then((event)=>{
    let account = event.data.filter(function(e){
      return e.status === "activeItem"
    })
setactiveCount(account.length)
let account1 = event.data.filter(function(e){
return e.status === "inactiveItem"
})
setinactivecount(account1.length);
  })}

  useEffect(()=>{
    getdata();
  },[])

  return (
    <div>
      <h1>Active:{activeCount}</h1>
      <br/>
      <h1>Inactive:{inactiveCount}</h1>
    </div>
  )
}

export default HomePage