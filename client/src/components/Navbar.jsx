import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom'; // Import NavLink
import '../App.css';
import logo from '../assets/movie.png'
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`); // Route to search page with term
    setSearchTerm('');
  };

  return (
    <nav>
      <div className="nav_container">
      <Link to='/' className='nav_logo'>
        <img to='/' className='logo' src={logo}></img>
      </Link>
      <div className="navbar">
        <ul className="menu">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Popular</NavLink> {/* Use NavLink */}
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/top-rated">Top Rated</NavLink> {/* Use NavLink */}
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/upcoming">Upcoming</NavLink> {/* Use NavLink */}
          </li>
          <li className='searchbar'>
            <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
              <input className="form-control mr-sm-2" type="search" placeholder="Movie Name" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
