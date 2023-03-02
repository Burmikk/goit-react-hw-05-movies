import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import scss from './home.module.scss';

const Home = () => {
  return (
    <>
      <h2 className={scss.title}>Trending today</h2>
      <TrendingMovies />
    </>
  );
};

export default Home;
