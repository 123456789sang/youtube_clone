import React, { useEffect, useRef, useState } from 'react'

const Demo1 = () => {
    const[y,setY]=useState(0);
    let x=0;
    const ref =useRef(0);
    /**
     * ref is not like ref =0 
     * ref is object like ref={current:0}
     *  */
    console.log("Rendering.....");


   //using let is not very interested way
    //let i=null;
     
    const i= useRef(null);

    // let i={ 
    //     current:null
    // };

    useEffect(()=>{
        // if we have already the setinterval 
        if(i.current)return;
       i.current=setInterval(()=>{
           // console.log("Namste react",Math.random())
        },1000)

       
    },[])
    
    
  return (
    <div className='mx-4 p-2 mb-4 mt-[75px] border border-black w-96 h-96'>
        <div>
            <button className='m-4 p-2 bg-green-400'
                onClick={()=>{
                    x=x+1;
                    console.log(x);
                }}>
                Increase x 
            </button>
            <span className='font-bold text-xl'>Let={x}</span>
        </div>
        <div>
            <button className='m-4 p-2 bg-green-400'
                onClick={()=> setY(y+1)}>
                Increase y
            </button>
            <span className='font-bold text-xl'>State={y}</span>
        </div>

        <div>
            <button className='m-4 p-2 bg-green-400'
                onClick={()=> {
                    ref.current=ref.current+1
                    console.log("ref x=", ref.current)
                }}>
                Increase Ref
            </button>
            <span className='font-bold text-xl'>Ref={ref.current}</span>
        </div>
        <button className='m-4 p-3 font-bold text-white bg-red-900 rounded-lg' 
            onClick={()=>{
                clearInterval(i.current)
            }}>
            Stopping
      </button>
    </div>

    
  );
}
export default Demo1;