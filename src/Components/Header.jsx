import React from 'react';
import { StyledHeader, ImageContainer, Form, SearchInput, StyledLink, StarOutlineIcon, StarFillIcon } from '../styles/componentStyles';
import { useMarvelContext } from '../context/MarvelContext';
import useMarvelSearch from '../Hooks/useMarvelSearch';

function Header() {
  const { favorites } = useMarvelContext();
  const { search, inputValue, handleInputChange } = useMarvelSearch();

  const handleSearch = (e) => {
    e.preventDefault()
    search(inputValue)
  }
  return (
    <StyledHeader>
      <ImageContainer>
        <a href="https://www.marvel.com/" target='_blank'>
          <img src="src/assets/Marvel_Logo.svg.png" alt="Marvel Logo" />
        </a>
      </ImageContainer>

      <Form onSubmit={handleSearch} >
        <SearchInput type="text" value={inputValue} onChange={handleInputChange}placeholder="Search character..." />
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
