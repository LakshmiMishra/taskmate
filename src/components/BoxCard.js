import React, { children, useState } from 'react'

export default function BoxCard({result,children}) {
    const[show,setShow]=useState(true);
  return (
    <>
      <div className={show?"":"hidden"}> 
      <div className={ `box ${result}`}>
           {children}
        </div>
          <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
       </div>
     
        </>
  ) 
}
