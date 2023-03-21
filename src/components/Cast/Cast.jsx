import { useEffect, useState, memo } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'shared/api/moviesApi';
import scss from './cast.module.scss';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const params = useParams();

  useEffect(() => {
    setTimeout(() => {
      scroll();
    }, 200);
  }, []);

  const scroll = () => {
    const { height: cardHeight } = document
      .querySelector('#wrapper')
      .firstElementChild.getBoundingClientRect();
    console.log(cardHeight);
    window.scrollBy({
      top: cardHeight,
      behavior: 'smooth',
    });
  };

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
    <li className={scss.cast_item} key={cast_id}>
      <img
        className={scss.cast_img}
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
        <ul className={scss.cast_list}> {castMarkup}</ul>
      ) : (
        <p>We dont have any information about cast for this movie</p>
      )}
    </>
  );
};
export default memo(Cast);
