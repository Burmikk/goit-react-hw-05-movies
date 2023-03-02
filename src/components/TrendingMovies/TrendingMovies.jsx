import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'shared/api/moviesApi';
import MovieList from 'shared/MovieList/MovieList';
import scss from './trending-movies.module.scss';

const TrendingMovies = () => {
  const [trend, setTrend] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const { data } = await getTrendingMovies();
        setTrend(data.results);
      } catch (error) {
        setError(error.message || 'Something wrong! Try later!');
      }
    };
    fetchTrend();
  }, []);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul className={scss.list}>
          <MovieList movies={trend} />
        </ul>
      )}
    </>
  );
};
export default TrendingMovies;
