import { client } from './client.js';

export async function getBooks() {
  const response = await client.from('books').select('*');

  return response.body;
}

export async function getMovies() {
  const response = await client.from('movies').select('*');

  return response.body;
}

export async function getArtists() {
  const response = await client.from('artists').select('*');

  return response.body;
}

export async function getPlayers() {
  const response = await client.from('players').select('*');

  return response.body;
}
