import React from 'react';
import { StarIcon } from '@heroicons/react/24/outline';

function Header({ value, inputChange, handleSearch, onFavoritesClick, searchType, setSearchType}) {

  return (
    <header className='flex justify-between border-b-2 p-2'>
      <div className='w-1/12 p-1'>
        <img src="src\assets\Marvel_Logo.svg.png" alt="Marvel Logo" />
      </div>

      <form className='flex items-center justify-stretch w-10/12 ml-2' onSubmit={handleSearch}>
        <input type="text" value={value} onChange={inputChange} placeholder="Search character..." className='border-l-2 w-full p-1 focus:outline-none'/>
        <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
          <option value="comic">Comic</option>
          <option value="character">Character</option>
        </select>
      </form>

      <button onClick={onFavoritesClick} className='w-1/12'>
        <StarIcon className='w-7 m-auto opacity-50'/>
      </button>
    </header>
  );
}

export default Header;
