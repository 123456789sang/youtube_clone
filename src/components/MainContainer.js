import React from 'react'
import ButtonList from './ButtonList';
import VedioContainer from './VedioContainer';

const MainContainer = () => {
  return (
    <div className="flex flex-col  ">
      <ButtonList />
      <div className="flex-1 ">
        <VedioContainer />
      </div>
    </div>
  );
}
;
export default MainContainer;