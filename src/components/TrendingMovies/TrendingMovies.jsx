import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'shared/api/moviesApi';
import MovieList from 'shared/MovieList/MovieList';

const TrendingMovies = () => {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        const { data } = await getTrendingMovies();
        setTrend(data.results);
      } catch (error) {}
    };
    fetchTrend();
  }, []);

  return (
    <ul>
      <MovieList movies={trend} />
    </ul>
  );
};

export default TrendingMovies;
