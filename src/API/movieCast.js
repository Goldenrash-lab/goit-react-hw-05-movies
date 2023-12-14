import { api } from './api';

export async function getCast(id) {
  const { data } = await api(`/3/movie/${id}/credits`);
  return data;
}
