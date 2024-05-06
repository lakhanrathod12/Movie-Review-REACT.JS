import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { getTopRatedMovies } from '../api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getTopRatedMovies(page);
      setMovies(response.data.results);
    };

    fetchMovies();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="container">
      <MovieList movies={movies} />
      {movies.length > 0 && (
        <button onClick={handleLoadMore} className="btn btn-primary">
          Load More
        </button>
      )}
    </div>
  );
};

export default HomePage;
