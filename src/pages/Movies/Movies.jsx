import SearchForm from 'components/SearchFrom/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieBySearch } from 'shared/api/moviesApi';
import MovieList from 'shared/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchSearchMovie = async () => {
      try {
        const { data } = await getMovieBySearch(search);
        setMovies(data.results);
      } catch (error) {
        setError(error.message || 'Something wrong! Try later!');
      }
    };
    if (search) {
      fetchSearchMovie();
    }
  }, [search]);

  const handleSearch = value => {
    if (!value.trim()) {
      return;
    }
    setSearchParams({ search: value });
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />

      {error && <p>{error}</p>}
      {movies.length > 0 && (
        <ul>
          <MovieList movies={movies} />
        </ul>
      )}
      {search && movies.length === 0 && !error && (
        <p>Cant find movie: {search}</p>
      )}
    </>
  );
};

export default Movies;
