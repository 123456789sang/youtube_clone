import React, { useMemo } from 'react'
import { useState } from 'react';
import { findPrime } from '../utils/helper';
const Demo = () => {
    const [text,setText] = useState(0);
    const[isDarkTheme,setIsDarkTheme]=useState(true);
    //heavy operation 
    
    //const prime =useMemo(()=>findPrime(text) ,[text])
   const prime=findPrime(text);


  return (

    <div
        className={`mt-[75px] mx-4 mb-5 p-2 w-96 h-96 border border-black ${
            isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
>
         <div>
         <button className='m-10 p-2 bg-green-500 ' onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
        </div> 
        <div>
            <input 
                className='w-80 px-2 border border-black text-black'
                type="number"
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
        </div>

        <div >
           <h1 className='mt-4 font-bold text-xl'> nth:{prime}</h1>
        </div>
    </div>
  )
}

export default Demo;