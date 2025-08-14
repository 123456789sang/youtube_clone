import React, { useState } from 'react';


const Button = ({ name }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 150); // Flash for 150ms
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`p-2 md:p-2.5 mx-2 my-1 rounded-xl
          ${clicked ? 'bg-pink-300' : 'bg-gray-100'}
          hover:bg-pink-100 hover:scale-105
           transition-transform duration-150 ease-in-out break-keep`}
      >
        <div className="flex items-center gap-1 text-sm">
        
          {name}
        </div>
      </button>
    </div>
  );
};

export default Button;
