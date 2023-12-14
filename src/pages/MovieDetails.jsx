import { getMovie } from 'API/movieDetail';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { Outlet, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    async function getMovieDetail() {
      try {
        setIsLoading(true);
        const result = await getMovie(movieId);

        setMovie(result);
      } catch (error) {
        Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieDetail();
  }, [movieId]);

  return (
    <>
      <button onClick={() => navigate(location.state ?? '/movies')}>
        Go back
      </button>
      {isLoading && <DNA />}
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            width="300"
          />
          <div>
            <h2>{movie.title}</h2>
            <p>User score - {movie.vote_average.toFixed(1)}/10</p>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(el => el.name + ' ')}</p>
          </div>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
