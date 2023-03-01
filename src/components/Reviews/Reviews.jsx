import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'shared/api/moviesApi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await getMovieReviews(params.movieId);
        setReviews(data.results);
      } catch (error) {}
    };
    fetchReviews();
  }, [params.movieId]);

  let reviewMarkup = [];
  if (reviews.length !== 0) {
    reviewMarkup = reviews.map(({ author, content, id }) => (
      <li key={id}>
        <h4>{author}</h4>
        <p>{content}</p>
      </li>
    ));
  }

  return (
    <ul>
      {reviews.length
        ? reviewMarkup
        : 'We dont have any reviews for this movie'}
    </ul>
  );
};
export default Reviews;
