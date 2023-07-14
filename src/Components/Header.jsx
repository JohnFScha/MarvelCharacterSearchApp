import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/outline'

const PUBLIC_KEY = '0a13d695b4d59a3324ab3e0c62ef0a7e'

function Header({ onFavoritesClick}) {
  const [searchValue, setSearchValue] = useState('');
  const [character, setCharacter] = useState('')

  const fetchCharacterData = async () => {
    const response = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchValue}&apikey=${PUBLIC_KEY}`)
    const info = await response.json()
    const newCharacter = await info.data.results
    setCharacter(newCharacter)
  }
  
  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
    if(searchValue.length >= 2) {
      fetchCharacterData()
      console.log(character)
    }
  };

  return (
    <header className='flex justify-between border-b-2 p-2'>
      <div className='w-1/12 p-2'>
        <img src="src\assets\Marvel_Logo.svg.png" alt="Marvel Logo" />
      </div>

      <form className='flex items-center justify-stretch w-10/12'>
        <input type="text" value={searchValue} onChange={handleInputChange} placeholder="Search character" className='border-l-2 w-full p-2 focus:outline-none'/>
      </form>

      <button onClick={onFavoritesClick} className='w-1/12'>
        <StarIcon className='w-10 m-auto opacity-50'/>
      </button>
    </header>
  );
}

export default Header;
