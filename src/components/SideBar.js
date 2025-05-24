import React from 'react'
import { useSelector } from 'react-redux'


const SideBar = () => {

    const isMenuOpen = useSelector((state)=>state.app.isMenuOpen)
    //early return 
    if (!isMenuOpen) return null;
            
       
  return (
    <div className='w-48 p-5 shadow-lg'>
        <ul>
            <li>Home</li>
            <li>Short</li>
            <li>Vedio</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold '>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            <li>Courses</li>
        </ul>
        <h1 className='font-bold '>Watch later </h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            <li>Courses</li>
        </ul>
    </div>
  )

}
export default SideBar;