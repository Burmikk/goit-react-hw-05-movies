import SearchForm from 'components/SearchFrom/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieBySearch } from 'shared/api/moviesApi';
import MovieList from 'shared/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchSearchMovie = async () => {
      try {
        const { data } = await getMovieBySearch(search);
        setMovies(data.results);
      } catch (error) {}
    };
    if (search) {
      fetchSearchMovie();
    }
  }, [search]);

  const handleSearch = value => {
    setSearchParams({ search: value });
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <ul>
        <MovieList movies={movies} />
      </ul>
    </>
  );
};

export default Movies;
