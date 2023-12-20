import { api_key } from './ApiKey';


export const trending = `trending/all/week?api_key=${api_key}&language=en-US`;

export const action = `discover/movie?api_key=${api_key}&with_genres=28`;

export const originals = `discover/tv?api_key=${api_key}&with_networks=213`;

export const horrorMovies = `discover/movie?api_key=${api_key}&with_genres=27`;

export const imageUrl = 'https://image.tmdb.org/t/p/original';

export const videoapi = `movie/872585/videos?api_key=${api_key}&language=en-US`;

export const apiBaseUrl = "https://api.themoviedb.org/3";