import React from 'react'
import ButtonList from './ButtonList';
import VedioContainer from './VedioContainer';

const MainContainer = () => {
  return (
   <div className='h-screen '>
        <div className=' mt-12  '>
            <ButtonList/>
            <VedioContainer/>
        </div>
   </div>
  );
}
;
export default MainContainer;