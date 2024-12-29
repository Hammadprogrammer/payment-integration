import React from 'react'
import Btn from './component/btn';
import Link from 'next/link';


const page = async() => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await data.json()
  console.log(users);
  


  return (
   <>

   {
    users.map((item)=>{
      return <div>
        <Link href={`/users/${item.id}`}></Link>
        <h1>{item.name}</h1>
        <h1>{item.id}</h1>
        <h1>{item.username}</h1>
        <Btn></Btn>
        
        <hr/>
      </div>
    })
   }
 </>
  )
}

export default page
