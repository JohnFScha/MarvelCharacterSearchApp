import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/outline'

function Header({ onSearch, onFavoritesClick }) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue)
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <header className='flex justify-between border-b-2 p-2'>
      <div className='w-1/12 p-2'>
        <img src="src\assets\Marvel_Logo.svg.png" alt="Marvel Logo" />
      </div>

      <form onSubmit={handleSearchSubmit} className='flex items-stretch justify-stretch w-10/12'>
        <input type="text" value={searchValue} onChange={handleInputChange} placeholder="Search character" className='border-l-2 w-full p-5 focus:outline-none'/>
      </form>

      <button onClick={onFavoritesClick} className='w-1/12'>
        <StarIcon className='w-10 m-auto opacity-50'/>
      </button>
    </header>
  );
}

export default Header;
