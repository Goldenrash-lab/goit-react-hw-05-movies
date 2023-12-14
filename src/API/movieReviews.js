import { api } from './api';

export async function getReviews(id) {
  const { data } = await api(`/3/movie/${id}/reviews`);
  return data;
}
