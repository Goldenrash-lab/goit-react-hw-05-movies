import React, { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';
import { Notify } from 'notiflix';
import { Heading2, StyledLink, StyledList } from './TodayMoviesList.styled';
import { getMoviesToday } from 'API/api';

const TodayMoviesList = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  async function getMovies() {
    try {
      setIsLoading(true);
      const { results } = await getMoviesToday();
      setIsLoading(false);
      setMovies(results);
    } catch (error) {
      Notify.failure(error.message);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {isLoading && (
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
      <Heading2>Trending today</Heading2>
      <StyledList>
        {movies?.map(el => {
          return (
            <li key={el.id}>
              <StyledLink to={`movies/${el.id}`} state={location}>
                {el.title || el.name}
              </StyledLink>
            </li>
          );
        })}
      </StyledList>
    </>
  );
};

export default TodayMoviesList;
