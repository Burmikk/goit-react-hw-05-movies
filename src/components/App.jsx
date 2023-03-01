import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

import UserRoute from 'UserRoute';

export const App = () => {
  return (
    <>
      <NavBar />
      <UserRoute />
    </>
  );
};
