import React, { useEffect } from 'react';
import { StyledHeader, ImageContainer, Form, SearchInput, StyledLink, StarOutlineIcon, StarFillIcon } from '../styles/componentStyles';
import { useMarvelContext } from '../context/MarvelContext';
import useMarvelSearch from '../hooks/useMarvelSearch';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { favorites } = useMarvelContext();
  const { search, inputValue, handleInputChange, setRandomCharacter } = useMarvelSearch();
  const navigate = useNavigate();
  
  useEffect(()=> {
    setRandomCharacter()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    search(inputValue)
    navigate("/")
  }

  return (
    <StyledHeader>
      <ImageContainer>
        <a href="https://www.marvel.com/" target='_blank'>
          <img src="/Marvel_Logo.png" alt="Marvel Logo" />
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
