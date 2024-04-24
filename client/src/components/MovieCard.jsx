import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie }) => {
  const posterUrl = `${IMAGE_BASE_URL}${movie.poster_path}`;
  
  // Truncate the movie title if it exceeds 30 characters
  const truncatedTitle = movie.title.length > 18 ? `${movie.title.substring(0, 18)}...` : movie.title;

  return (
    <Link to={`/movies/${movie.id}`} className="card grid">
      <img className="card-img-top" src={posterUrl} alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{truncatedTitle}</h5>
        <p className="card-text">Rating: {movie.vote_average}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
