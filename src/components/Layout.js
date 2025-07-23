import React from 'react';
import Head from './Head';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar'; // fixed import name

const Layout = () => {
  return (
    <>
      <Head />
       <div className="flex h-[calc(100-4rem)] mt-16">
            <SideBar />
            <div className="flex-1 max-h-screen overflow-auto scrollbar-hide ">
                <Outlet />
            </div>
        </div>

    </>
  );
};

export default Layout;
