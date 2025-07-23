import React from 'react';
import {
  FaFilm, FaFire, FaGamepad, FaHome, FaNewspaper,
  FaPodcast, FaThumbsUp, FaVideo
} from 'react-icons/fa';
import { MdLiveTv, MdSchool, MdSportsEsports } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { GiHamburgerMenu } from 'react-icons/gi';

const SideBar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  return (
    <>
      {/* Overlay for any screen size */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => dispatch(closeMenu())}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-64 z-50 shadow-lg transition-transform duration-300 ease-in-out transform
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Top Bar inside Sidebar */}
        <div className="flex items-center gap-4 px-3 py-3 mt-2 border-b border-gray-200">
          <img  
            onClick={() => dispatch(closeMenu())}
            className='h-8 cursor-pointer'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s" alt="menu"/>

        
           <Link  to="/"><img className='h-8 mx-2 '
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nmSBXmGA-7Voowpk8oAcwLgXEpsIB_h3Jw&s" alt="Youtube-logo"/>
           </Link>
        </div>

        {/* Sidebar Links */}
        <div className="px-2 overflow-y-auto scrollbar-hide h-full pb-8">
          <ul className="mt-4">
            <MenuLink to="/" icon={<FaHome size={20} />} label="Home" />
            <MenuLink to="/shorts" icon={<FaFire size={20} />} label="Shorts" />
            <MenuLink to="/" icon={<FaVideo size={20} />} label="Video" />
            <MenuLink to="/" icon={<MdLiveTv size={20} />} label="Live" />
          </ul>

          <SectionTitle title="Subscriptions" />
          <ul>
            <MenuLink to="/" icon={<FaFilm size={20} />} label="Movie" />
            <MenuLink to="/" icon={<MdSportsEsports size={20} />} label="Sports" />
            <MenuLink to="/" icon={<FaGamepad size={20} />} label="Gaming" />
            <MenuLink to="/" icon={<FaThumbsUp size={20} />} label="Liked Video" />
          </ul>

          <SectionTitle title="Watch Later" />
          <ul>
            <MenuLink to="/" icon={<FaFilm size={20} />} label="Movie" />
            <MenuLink to="/" icon={<MdSportsEsports size={20} />} label="Sports" />
            <MenuLink to="/" icon={<FaGamepad size={20} />} label="Gaming" />
            <MenuLink to="/" icon={<FaThumbsUp size={20} />} label="Liked Video" />
          </ul>

          <SectionTitle title="Explore" />
          <ul>
            <MenuLink to="/" icon={<FaNewspaper size={20} />} label="News" />
            <MenuLink to="/" icon={<MdSchool size={20} />} label="Courses" />
            <MenuLink to="/" icon={<FaFire size={20} />} label="Trending" />
            <MenuLink to="/" icon={<FaPodcast size={20} />} label="Podcast" />
          </ul>
        </div>
      </div>
    </>
  );
};

const MenuLink = ({ to, icon, label }) => (
  <Link to={to}>
    <li className="flex items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4">
      <span className="mr-4">{icon}</span>
      <span className="text-sm font-roboto text-black">{label}</span>
    </li>
  </Link>
);

const SectionTitle = ({ title }) => (
  <h1 className="font-semibold my-4 mx-4 text-gray-600">{title}</h1>
);

export default SideBar;
