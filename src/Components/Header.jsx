import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';

function Header({ value, inputChange, handleSearch, searchType, setSearchType, favorites }) {

  return (
    <header className='flex justify-evenly border-b-2 p-2 shadow-lg shadow-gray-400 rounded-b-md'>
      <div className='w-1/12 '>
        <a href="https://www.marvel.com/" target='_blank'>
          <img src="src\assets\Marvel_Logo.svg.png" alt="Marvel Logo" />
        </a>
      </div>

      <form className='flex items-center justify-stretch w-10/12' onSubmit={handleSearch} >
        <input type="text" value={value} onChange={inputChange}placeholder="Search character..." className='border-l-2 w-full p-1 focus:outline-none'/>
        <select value={searchType} onChange={(e) => setSearchType(e.target.value)} className='h-full'>
          <option value="comic">Comic</option>
          <option value="character">Character</option>
        </select>
      </form>

      <Link to="/favorites" className='flex items-center'>
        {
          favorites.length === 0 ?
          <StarOutline className='w-7 m-auto opacity-50'/>
          : 
          <StarSolid className='w-7 m-auto opacity-50'/>
        }
      </Link>
    </header>
  );
}

export default Header;
