import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

if (!baseURL) {
  throw new Error('❌ NEXT_PUBLIC_TMDB_BASE_URL não definida');
}

if (!apiKey) {
  throw new Error('❌ NEXT_PUBLIC_TMDB_API_KEY não definida');
}

const tmdbApi = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
});

export default tmdbApi;
