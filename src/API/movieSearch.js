import { api } from './api';

export async function getSearchMovie(q) {
  const { data } = await api(`/3/search/movie`, {
    params: {
      query: q,
    },
  });
  return data;
}
