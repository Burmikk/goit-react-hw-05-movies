import NavBar from './NavBar/NavBar';
import UserRoute from 'UserRoute';
import scss from './app.module.scss';

export const App = () => {
  return (
    <div className={scss.container}>
      <NavBar />
      <UserRoute />
    </div>
  );
};
