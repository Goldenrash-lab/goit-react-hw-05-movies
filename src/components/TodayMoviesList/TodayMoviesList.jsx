import React, { useEffect, useState } from 'react';
import { getMoviesToday } from 'API/moviesToday';
import { DNA } from 'react-loader-spinner';
import { Link, useLocation } from 'react-router-dom';
import { Notify } from 'notiflix';

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
      <ul>
        {movies?.map(el => {
          return (
            <li key={el.id}>
              <Link to={`movies/${el.id}`} state={location}>
                {el.title || el.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodayMoviesList;
