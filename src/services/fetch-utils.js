import { client } from './client.js';

export async function getBooks() {
  const response = await client.from('books').select('*');

  return response.body;
}
