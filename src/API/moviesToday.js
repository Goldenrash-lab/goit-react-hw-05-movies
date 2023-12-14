import { api } from './api';

export async function getMoviesToday() {
  const { data } = await api('/3/trending/all/day');
  return data;
}

//cce8025fc403310fa065589b0010d6be
