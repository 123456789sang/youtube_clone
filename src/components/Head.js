import React, { useEffect } from 'react'
import { FaArrowAltCircleLeft, FaSearch } from 'react-icons/fa';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { useSelector } from 'react-redux';
import { cacheResults } from '../utils/searchSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdMic } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { IoArrowBack } from 'react-icons/io5';
const Head = () => {
    const[searchQuery,setSearchQuery]=useState("");
    const [suggestion ,setSuggestions]=useState([]);
    const[showSuggestions,setShowSuggestions]=useState(false);
    const searchCache = useSelector((store)=>store.search);
    const [showMobileSearch, setShowMobileSearch] = useState(false);

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
     
        const data= await fetch(YOUTUBE_SEARCH_API+searchQuery)
        const json = await data.json();
    
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
    <div className={`fixed top-0 left-0 right-0 z-50 bg-white grid h-16 grid-flow-col py-3 px-2 shadow-sm ${showMobileSearch ? 'sm:grid' : 'grid'}`}>

        <div className='flex justify-between gap-2 sm:gap-3 md:gap-4 xl:gap-6 '>
             
            {/* hamburger and logo */}
            <div className={`flex w-full sm:w-2/12  items-center ${showMobileSearch ? 'hidden' : 'flex'} sm:flex`}>

                <img  onClick={()=>togglemenuhandler()}
                className='h-6 w-6 sm:h-8 sm:w-8 cursor-pointer'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s" alt="menu"/>

                <Link  to="/"><img className='h-8 w-auto  mx-2 object-contain'
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="Youtube-logo"/>
            </Link>
            </div>

             {/* searchbar  */}
            <div className="w-full sm:w-9/12  px-5 relative">
                {/* Desktop & tablet */}
                <div className="hidden sm:flex justify-center items-center">
                    <input
                        className="w-[50%] border border-gray-300 pl-4 p-2 rounded-l-full"
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
                    <button
                    className="border border-gray-300 px-3 py-2 sm:px-4 sm:py-2 rounded-r-full bg-gray-100 hover:bg-gray-200"
                    onClick={() => navigate(`/results?q=${searchQuery}`)}
                    >
                    <IoSearch size={24} className="text-black opacity-40" />
                    </button>
                    <div className="flex items-center mx-4">
                    <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-2">
                        <MdMic size={22} />
                    </button>
                    </div>
                </div>

                {/* Mobile view */}
                <div className="sm:hidden flex items-center justify-end w-full">
                    {showMobileSearch ? (
                        <div className="flex w-full items-center">
                        {/* Back/Clear button */}
                        <button
                            className=" p-2 bg-gray-100 rounded-full mr-2 hover:bg-gray-300"
                            onClick={() => setShowMobileSearch(false)}
                        >
                            
                            <IoArrowBack size={20} className="text-gray-600" />
                    
                        </button> 

                        <input
                            className=" flex-grow border border-gray-300 pl-4 p-2 focus:outline-none rounded-l-full"
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

                        <button
                            className="border border-gray-300 px-4 py-2.5 rounded-r-full bg-gray-100 hover:bg-gray-200"
                            onClick={() => {
                            if (searchQuery.trim() !== '') {
                                navigate(`/results?q=${searchQuery}`);
                            }
                            }}
                        >
                            <IoSearch size={20} className="text-black opacity-40" />
                        </button>
                        </div>
                    ) : (
                        <button
                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
                        onClick={() => setShowMobileSearch(true)}
                        >
                        <IoSearch size={22} />
                        </button>
                    )}
                </div>


                {/* Suggestions (common for all views) */}
                {showSuggestions && searchQuery && (
                    <div className="absolute  top-11 ml-8  sm:-ml-4 md:ml-4 xl:ml-32 bg-white py-2 px-2 w-[80%] sm:w-[25rem] md:w-[33rem] shadow-lg rounded-lg border border-gray-100">
                    <ul>
                        {suggestion.map((s) => (
                        <li
                            key={s}
                            className="flex items-center gap-4 py-2 px-3 shadow-sm hover:bg-gray-100"
                            onMouseDown={() => navigate(`/results?q=${s}`)}
                        >
                            <FaSearch size={20} className="text-gray-300" /> {s}
                        </li>
                        ))}
                    </ul>
                    </div>
                )}
            </div>


            {/* user icon */}
            <div className={`flex items-center gap-1 sm:gap-2 md:gap-3 mx-2 sm:mx-3 md:mx-4 xl:mx-5 ${showMobileSearch ? 'hidden' : 'flex'} sm:flex`}>

                {/* create */}
                <button className='hidden sm:flex items-center mr-1 sm:mr-6 md:mr-8 rounded-r-full rounded-l-full bg-gray-200 hover:bg-pink-100 px-3 py-2'>
                
                   <span className='text-sm font-semibold text-gray-700'> +Create</span>
                </button>

                {/* Notification Bell */}
                <button className="p-2.5  relative  mr-3 hover:bg-gray-200 rounded-full">
                    <IoMdNotificationsOutline size={24} />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1 rounded-full">
                    3
                    </span>
                </button>

                {/* User Avatar */}
                <FaUserCircle size={24} className='text-gray-600 cursor-pointer h-6 w-6 rounded-full object-cover sm:h-7 sm:w-7 md:h-8 md:w-8  ' />
            </div>

       </div>
    </div>
  )
}

export default Head ;
