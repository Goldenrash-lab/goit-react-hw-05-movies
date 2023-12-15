import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormStyled, Input, SearchBtn } from './SearchBar.styled';

const SearchBar = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const value = searchParams.get('search');
    setSearchMovie(value ?? '');
  }, [searchParams]);

  function handleSubmit(e) {
    e.preventDefault();
    const search = e.target.elements.search.value;
    if (search) {
      setSearchParams({ search });
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
