import React, { useState } from 'react';

import '../App.css';

const CastList = ({ cast }) => {
  const [visibleCount, setVisibleCount] = useState(5); 


  const handleLoadMore = () => {
    setVisibleCount(cast.length); 
  };


  if (!cast || !cast.length) {
    return <div>No cast information available</div>;
  }

  return (
    <>
      <ul className="cast-members grid">
        {cast.slice(0, visibleCount).map((actor) => (
          <li key={actor.id} className="cast-member">
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} 
              alt={actor.name}
              className="cast-img-top"
            />
            <div className="cast-member-info">
              <p className="cast-member-name">{actor.name}</p>
              <p className="cast-member-character">{actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
      {cast.length > 6 && visibleCount < cast.length && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </>
  );
};

export default CastList;
