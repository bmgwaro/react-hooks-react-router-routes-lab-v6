import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/directors" element={<Directors />} />
    <Route path="/actors" element={<Actors />} />
    <Route path="/movie/:id" element={<Movie />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default routes;