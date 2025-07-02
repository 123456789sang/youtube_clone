import React, { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { useSelector } from 'react-redux';
import { cacheResults } from '../utils/searchSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Head = () => {
    const[searchQuery,setSearchQuery]=useState("");
    const [suggestion ,setSuggestions]=useState([]);
    const[showSuggestions,setShowSuggestions]=useState(false);
    const searchCache = useSelector((store)=>store.search)
      const navigate = useNavigate();
    useEffect(()=>{
       // make an api call after every key press 
       // but the diff bwt api call is <200ms
     
         //decline the api call
     
        const timer = setTimeout(()=>
        {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }
            else{
                getSearchSuggesstions()
            }
        } ,200)

        return ()=>{
            clearTimeout(timer);
        }
         
    },[searchQuery]);

    const getSearchSuggesstions = async ()=>{
        console.log("api call-"+searchQuery)
        const data= await fetch(YOUTUBE_SEARCH_API+searchQuery)
        const json = await data.json();
       // console.log(json[1]);
        setSuggestions(json[1]);

        //update the cache
        dispatch(
            cacheResults({
                [searchQuery]:json[1],
             
            })
        );
    }

    const dispatch = useDispatch();
    const togglemenuhandler=()=>{
        dispatch(toggleMenu());
    }

   return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-white grid h-16 grid-flow-col py-3 px-3    shadow-sm'>

       <div className='flex justify-between gap-6'>
         <div className='flex w-2/12 mt-2 items-center '>

            <img  onClick={()=>togglemenuhandler()}
            className='h-8 cursor-pointer'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s" alt="menu"/>

            <Link  to="/"><img className='h-8 mx-2'
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nmSBXmGA-7Voowpk8oAcwLgXEpsIB_h3Jw&s" alt="Youtube-logo"/>
           </Link>
        </div>

        <div className="w-9/12 px-5 relative">
            <div className='flex  justify-center items-center '> 
                <input
                    className='w-[50%] border border-gray-300 pl-4 p-2 rounded-l-full'
                    type="text"
                    placeholder="Search ...."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                    onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim() !== '') {
                        setShowSuggestions(false);
                    navigate(`/results?q=${searchQuery}`);
                    }
                }}
               />
                <button className=' border border-gray-300 px-7 py-2 rounded-r-full bg-gray-100 hover:bg-gray-200 transition-all duration-200'
                    onClick={() => navigate(`/results?q=${searchQuery}`)} >
                    <FaSearch size={24} className='text-black opacity-40'  />
                </button>
            </div>
            {showSuggestions&&(
                <div className= 'absolute top-11  bg-white py-2 px-2  w-[33rem] shadow-lg rounded-lg border border-gray-100 '>
                    <ul className=''>
                       {suggestion.map((s)=>(<li key={s} className='flex items-center gap-4 py-2 px-3 shadow-sm hover:bg-gray-100'
                        onMouseDown={() => navigate(`/results?q=${s}`)} >
                        <FaSearch size={20} className='text-gray-300'/>  {s}</li>))}  
                    </ul>
                </div>
            )}
        </div>
        
        <div className='flex items-center  w-1/12'> 
            <img className='h-8'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="user-icon"/>
        </div>
       </div>
    </div>
  )
}

export default Head ;
