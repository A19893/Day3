import React from 'react'

const List = (data) => {
  return (
    <>
    <ul>
    {
    data.data.map((item,idx)=>{
       return( 
       <>
        <li>{item.title}</li>
        </>
       )
    })
   }
   </ul>
    </>
  )
}

export default List