import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieParams } from 'shared/api/moviesApi';
import { Link, Outlet } from 'react-router-dom';
import scss from './movie-details.module.scss';

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const [error, setError] = useState('');

  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchParams = async () => {
      try {
        const { data } = await getMovieParams(params.movieId);
        setDetails(data);
      } catch (error) {
        setError(error.message || 'Something wrong! Try later!');
      }
    };

    fetchParams();
  }, [params.movieId]);
  const {
    poster_path,
    title,
    overview,
    vote_average,
    genres = [],
    budget,
  } = details;
  const genresName = genres.map(({ id, name }) => (
    <li className={scss.genres_item} key={id}>
      {name}
    </li>
  ));

  const goBack = () => navigate(from);
  return (
    <>
      {error ? (
        <p>{error} </p>
      ) : (
        <div className={scss.container}>
          <button className={scss.btn} onClick={goBack}>
            Go back
          </button>
          <div id="wrapper" className={scss.wrapper}>
            <img
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt=""
              width="300"
            />
            <div className={scss.info}>
              <h2>{title}</h2>
              <p>User Score: {Math.round(vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h4>Genres</h4>
              <ul className={scss.genres_list}>{genresName}</ul>
              <h4>Budget:</h4>
              <p>{budget} $</p>
            </div>
          </div>
          <div>
            <h4>Additional information</h4>
            <ul className={scss.additional_list}>
              <li className={scss.additional_item}>
                <Link className={scss.btn} state={{ from }} to="cast">
                  Cast
                </Link>
              </li>
              <li className={scss.additional_item}>
                <Link className={scss.btn} state={{ from }} to="reviews">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
