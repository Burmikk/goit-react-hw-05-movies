import axios from 'axios';

const moviesInstanse = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '85b4dc1af4e574bfc90c25d3ef4bf4bc',
  },
});
export const getTrendingMovies = () => {
  return moviesInstanse.get('/trending/movie/day');
};

export const getMovieParams = id => {
  return moviesInstanse.get(`/movie/${id}`);
};

export const getMovieCast = id => {
  return moviesInstanse.get(`/movie/${id}/credits`);
};

export const getMovieReviews = id => {
  return moviesInstanse.get(`/movie/${id}/reviews`);
};

export const getMovieBySearch = value => {
  return moviesInstanse.get('/search/movie', {
    params: {
      query: value,
    },
  });
};
