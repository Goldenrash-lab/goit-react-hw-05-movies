import TodayMoviesList from 'components/TodayMoviesList/TodayMoviesList';
import React from 'react';

const Home = () => {
  return (
    <>
      <h2>Trending today</h2>
      <TodayMoviesList></TodayMoviesList>
    </>
  );
};

export default Home;
