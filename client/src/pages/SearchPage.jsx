import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { getSearchResults } from '../api';
import { useParams } from 'react-router-dom'; // For getting search term from URL

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const { searchTerm } = useParams(); // Extract search term from URL params

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchTerm) {
        const response = await getSearchResults(searchTerm);
        setMovies(response.data.results);
      }
    };

    fetchMovies();
  }, [searchTerm]); // Re-fetch on search term change

  return (
    <div className="container">
      <h1>Search Results for "{searchTerm}"</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchPage;
