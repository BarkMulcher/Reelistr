import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/styles.css";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";


function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { token } = useToken();

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);


  function logout() {
    localStorage.setItem("token", null);
    setIsLoggedIn(false);
  }


  return (
    <nav className="navbar custom-navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand logo" to="/"><div className="logo">reelister</div></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Movies
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="/movies/trending">Trending</NavLink></li>
                <li><NavLink className="dropdown-item" to="/movies/comingsoon">Coming Soon</NavLink></li>
              </ul>
            </li>
            {isLoggedIn ? (
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/user/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Profile
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" to="/user/profile">My Profile</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/user/collections">Collections</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/user/library">Library</NavLink></li>
                </ul>
              </li>
            ) : null}
            {isLoggedIn ? (
              <li className="nav-item">
                <NavLink className="nav-link" to="/watchlist">Watchlist</NavLink>
              </li>
            ) : null}
          </ul>
          {isLoggedIn ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" onClick={logout} to="/">Logout</NavLink>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">Register</NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
