import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
const Head = () => {
    const dispatch = useDispatch();
    const togglemenuhandler=()=>{
        dispatch(toggleMenu());
    }
   return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>

        <div className='flex col-span-1'>

            <img  onClick={()=>togglemenuhandler()}
            className='h-8 cursor-pointer'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s" alt="menu"/>

            <img className='h-8 mx-2'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nmSBXmGA-7Voowpk8oAcwLgXEpsIB_h3Jw&s" alt="Youtube-logo"/>

        </div>

        <div className="flex col-span-10 px-12">
            <input className='w-[50%] border  border-gray-400 p-2 rounded-l-full '
                type="text" placeholder="Search ...."
            />
           
            <button className=' border border-gray-400 px-7 py-2 rounded-r-full bg-gray-100 '>
                <FaSearch size={20} className='text-gray-500 '  />
            </button>
        </div>

        <div className='col-span-1'> 
            <img className='h-8'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="user-icon"/>
        </div>
    </div>
  )
}

export default Head ;
