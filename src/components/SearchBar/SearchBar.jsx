import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormStyled, Input, SearchBtn } from './SearchBar.styled';

const SearchBar = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [, setSearchParams] = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchMovie) {
      setSearchParams({ search: searchMovie });
    }
  }
  function handleChange(e) {
    setSearchMovie(e.target.value);
  }
  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          type="text"
          name="search"
          placeholder="Spider-man"
          value={searchMovie}
          onChange={handleChange}
        />
        <SearchBtn></SearchBtn>
      </FormStyled>
    </>
  );
};

export default SearchBar;
