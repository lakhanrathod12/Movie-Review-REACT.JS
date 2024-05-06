import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetail, getMovieCast } from '../api';
import CastList from '../components/CastList';
import '../App.css';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetailResponse = await getMovieDetail(movieId);
        const castResponse = await getMovieCast(movieId);
        setMovie(movieDetailResponse.data);
        setCast(castResponse.data.cast);
      } catch (error) {
        setError(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }
  const truncatedOverview = movie.overview.length > 150 ? `${movie.overview.substring(0, 150)}...` : movie.overview;


  return (
    <>
    <div className=" movie-detail">
      <div className=" movie_container">
          <div className="movie-info">
            <div className="poster">
              <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
              </div>
              <div className="details">
                <h1 className='title'>{movie.title}</h1>
                <p className='rate'><strong>Rating:</strong> {movie.vote_average}</p>
                <p className='time'><strong></strong> {movie.runtime} min</p>
                <p className='genres'><strong></strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
                <p className='release' >Release Date : {movie.release_date}</p>
              </div>
            </div>
            <p className='overview'><strong>Overview</strong> <p className='overview-desc'><strong>{truncatedOverview}</strong></p></p>
            
          </div>
          <div className="thumbnail">
            <div className="backdrop">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            </div>
          </div>
      </div>
    </div>
    <div className="container cast-list">
        <h3>Cast</h3>
        <CastList cast={cast} />
    </div>
    </>  
  );
};

export default MovieDetailPage;
