import { getReviews } from 'API/api';
import React, { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewsMovie() {
      setIsLoading(true);
      const { results } = await getReviews(movieId);
      setReviews(results);
      setIsLoading(false);
    }
    getReviewsMovie();
  }, [movieId]);

  return (
    <>
      {isLoading && <DNA />}
      {reviews && (
        <ul>
          {reviews.map(el => {
            return (
              <li key={el.id}>
                <h3>Author: {el.author}</h3>
                <p>{el.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
