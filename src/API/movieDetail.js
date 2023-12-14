import { api } from './api';

export async function getMovie(id) {
  const { data } = await api(`/3/movie/${id}`);
  return data;
}
