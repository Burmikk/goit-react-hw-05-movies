import { Link, useLocation } from 'react-router-dom';
import scss from './movie-list.module.scss';

const MovieList = ({ movies }) => {
  const location = useLocation();

  const moviesList = movies.map(({ id, title, poster_path }) => (
    <li className={scss.item} key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt=""
          width="300"
        />
        <p className={scss.title}>{title}</p>
      </Link>
    </li>
  ));
  return moviesList;
};

export default MovieList;
