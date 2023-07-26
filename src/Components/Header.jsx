import React from 'react';
import { StyledHeader, ImageContainer, Form, SearchInput, StyledLink, StarOutlineIcon, StarFillIcon, Select } from '../styles/componentStyles';

function Header({ value, inputChange, handleSearch, searchType, setSearchType, favorites }) {

  return (
    <StyledHeader>
      <ImageContainer>
        <a href="https://www.marvel.com/" target='_blank'>
          <img src="src/assets/Marvel_Logo.svg.png" alt="Marvel Logo" />
        </a>
      </ImageContainer>

      <Form onSubmit={handleSearch} >
        <SearchInput type="text" value={value} onChange={inputChange}placeholder="Search character..." />
        <Select value={searchType} onChange={(e) => setSearchType(e.target.value)} className='h-full'>
          <option value="comic">Comic</option>
          <option value="character">Character</option>
        </Select>
      </Form>

      <StyledLink to="/favorites">
        {
          favorites.length === 0 ?
          <StarOutlineIcon />
          : 
          <StarFillIcon />
        }
      </StyledLink>
    </StyledHeader>
  );
}

export default Header;
