import React from 'react';
import Head from './Head';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar'; // fixed import name

const Layout = () => {
  return (
    <>
      <Head />
      <div className="flex flex-col md:flex-row h-screen overflow-hidden  ">
           <SideBar />
        <div className="flex-1 h-screen overflow-y-auto scrollbar-hide">
            <Outlet />
        </div>
    </div>
    </>
  );
};

export default Layout;
