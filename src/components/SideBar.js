import React, { useEffect, useState } from 'react';
import {
  FaFire, FaHome, FaBars, 
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeMenu, toggleMenu } from '../utils/appSlice';
import { categories } from '../utils/categories'; // Import category list

const SideBar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile && isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-50"
          onClick={() => dispatch(closeMenu())}
        />
      )}

      <div
        className={`
          ${isMobile
            ? `fixed top-0 left-0 h-screen bg-white z-50 w-48 transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`
            : `fixed top-0 left-0 h-screen bg-white z-30  transition-all duration-300 ${
                isMenuOpen ? 'w-48' : 'w-20'
              }`}
        `}
      >
        <div className="flex items-center gap-4 px-4 py-4 border-b border-gray-200">
          <FaBars
            className="cursor-pointer text-xl"
            onClick={() => dispatch(toggleMenu())}
          />
          {isMobile && isMenuOpen && (
            <Link to="/">
              <img
                className="h-8"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nmSBXmGA-7Voowpk8oAcwLgXEpsIB_h3Jw&s"
                alt="YouTube logo"
              />
            </Link>
          )}
        </div>

        <div className="p-2 poverflow-y-auto scrollbar-hide h-full pb-6">
          <ul className="mt-4 flex flex-col gap-4">
            <MenuLink to="/" icon={<FaHome size={24} />} label="Home" isOpen={isMenuOpen} isMobile={isMobile} />
            <MenuLink to="/shorts" icon={<FaFire size={24} />} label="Shorts" isOpen={isMenuOpen} isMobile={isMobile} />
          </ul>

          {isMenuOpen && !isMobile && <SectionTitle title="Categories" />}
          <ul className='mt-4 flex flex-col gap-4'>
            {categories.map((cat) => (
              <MenuLink
                key={cat.id}
                to={`/category/${cat.id || ''}`}
                icon={<cat.icon size={24} />} // Optional: Replace with specific icons
                label={cat.name}
                isOpen={isMenuOpen}
                isMobile={isMobile}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const MenuLink = ({ to, icon, label, isOpen, isMobile }) => {
  const dispatch = useDispatch();
  return (
    <Link to={to}>
      <li
        onClick={() => isMobile && dispatch(closeMenu())}
        className="flex items-center py-2 hover:bg-gray-200 rounded-md cursor-pointer px-4"
      >
        <span className="mr-4">{icon}</span>
        {(isOpen || isMobile) && <span className="text-sm font-roboto text-black">{label}</span>}
      </li>
    </Link>
  );
};

const SectionTitle = ({ title }) => (
  <h1 className="font-semibold my-4 mx-4 text-gray-600">{title}</h1>
);

export default SideBar;
