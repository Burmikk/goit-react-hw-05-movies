import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'shared/api/moviesApi';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const params = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await getMovieCast(params.movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error.message || 'Something wrong! Try later!');
      }
    };
    fetchCast();
  }, [params.movieId]);

  const castMarkup = cast.map(({ profile_path, character, name, cast_id }) => (
    <li key={cast_id}>
      <img
        src={`https://image.tmdb.org/t/p/original${profile_path}`}
        alt=""
        width="150"
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  ));

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : cast.length !== 0 ? (
        <ul> {castMarkup}</ul>
      ) : (
        <p>We dont have any information about cast for this movie</p>
      )}
    </>
  );
};
export default Cast;
