import React, {useState, useEffect } from 'react'

export default function UseEffectHook() {
  const [data1,setData]=useState([]);
  useEffect( ()=>{
    async function fetchData(){
    try{
      let response=await fetch('https://jsonplaceholder.typicode.com/posts')
      let data=await response.json()
      setData(data);
    }
    catch(err){
      console.log(err)
    }
  }
  fetchData();
  },[data1]);
  return (
    <div>
      <h1>Fetching Data from API using useEffect hook </h1>
      <ul>
      {data1.slice(0, 3).map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
