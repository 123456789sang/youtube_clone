import React , {useState} from 'react';
import Head from './Head';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar'; // fixed import name
import { useEffect } from 'react';

const Layout = () => {
     const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Head />
       <div className="flex h-[calc(100vh-4rem)] mt-16">
            <SideBar />
            <div  className={`flex-1 max-h-screen overflow-auto scrollbar-hide transition-all duration-300 ${
                isMobile ? 'ml-0' : isMenuOpen ? 'ml-48' : 'ml-20'
                }`} >
                <Outlet />
            </div>
        </div>

    </>
  );
};

export default Layout;
  