import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieParams } from 'shared/api/moviesApi';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const [details, setDetails] = useState([]);

  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state;

  useEffect(() => {
    const fetchParams = async () => {
      try {
        const { data } = await getMovieParams(params.movieId);
        setDetails(data);
      } catch (error) {}
    };

    fetchParams();
  }, [params.movieId]);
  const { poster_path, title, overview, genres = [] } = details;
  const genresName = genres.map(({ id, name }) => <li key={id}>{name}</li>);

  const goBack = () => navigate(from);
  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt=""
        width="300"
      />
      <h2>{title}</h2>
      <p>User score: %</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <ul>{genresName}</ul>
      <p>Additional information</p>
      <ul>
        <li>
          <Link state={{ from }} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link state={{ from }} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
