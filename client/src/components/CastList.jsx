import React, { useState } from 'react';
// import './CastList.css'; // Import your CSS file
import '../App.css';

const CastList = ({ cast }) => {
  const [visibleCount, setVisibleCount] = useState(5); // State to track the number of visible cast members

  // Function to handle the click event for loading more cast members
  const handleLoadMore = () => {
    setVisibleCount(cast.length); // Display all cast members
  };

  // Check if cast exists before mapping over it
  if (!cast || !cast.length) {
    return <div>No cast information available</div>;
  }

  return (
    <div className="cast-list grid">
      {/* <h3>Cast</h3> */}
      <ul className="cast-members">
        {/* Map over the cast array up to the visible count */}
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
      {/* Display the "Load More" button if there are more than 6 cast members */}
      {cast.length > 6 && visibleCount < cast.length && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CastList;
