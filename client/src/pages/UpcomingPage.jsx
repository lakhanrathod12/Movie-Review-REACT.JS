import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { getUpcomingMovies } from '../api';

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getUpcomingMovies();
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <MovieList movies={movies} />
    </div>
  );
};

export default UpcomingPage;
