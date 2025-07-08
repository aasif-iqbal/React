import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  
/*
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ahmedhossamdev')
    .then(res => res.json())
    .then(data => {
      console.log(data); 
      setData(data)
    }) 
  },[])
*/

  const data = useLoaderData(); // data from githubInfoLoader

  return(
    <div>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>{data.name}</div>
      <img src={data.avatar_url} alt={data.name} width={300} />
      <p>{data.bio}</p>
    </div>
  )
}

export default Github;

export const githubInfoLoader = async function(){
  const data = await fetch('https://api.github.com/users/ahmedhossamdev')
  return data.json()
}