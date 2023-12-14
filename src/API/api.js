import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org',

  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2U4MDI1ZmM0MDMzMTBmYTA2NTU4OWIwMDEwZDZiZSIsInN1YiI6IjY1NzliZTE4NGQyM2RkMDEwMDYwMWZmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IynrrUZhiKXNakepSY2p5zx3b2PZ_SpqiFtMiymL-jE',
  },
  params: {
    api_key: 'cce8025fc403310fa065589b0010d6be',
  },
});
