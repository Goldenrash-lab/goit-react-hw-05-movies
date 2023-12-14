import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
    setSearchParams({ search });
  }
  function handleChange(e) {
    setSearchMovie(e.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Spider-man"
          value={searchMovie}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </>
  );
};

export default SearchBar;
