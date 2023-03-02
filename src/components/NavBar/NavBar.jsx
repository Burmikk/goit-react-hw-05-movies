import { NavLink } from 'react-router-dom';
import scss from './navBar.module.scss';

const NavBar = () => {
  return (
    <nav className={scss.nav}>
      <NavLink className={scss.link} to="/">
        Home
      </NavLink>
      <NavLink className={scss.link} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default NavBar;
