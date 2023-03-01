import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'shared/api/moviesApi';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await getMovieCast(params.movieId);
        setCast(data.cast);
      } catch (error) {}
    };
    fetchCast();
  }, []);

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

  return <ul>{castMarkup}</ul>;
};
export default Cast;
