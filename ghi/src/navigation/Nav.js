import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from 'react-router-dom';
import Movie from "../components/MovieSearch";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ color: 'white', backgroundColor: '#2D3260' }}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Reelistr</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <li><NavLink className="nav-link" aria-current="page" to="/signup">Sign Up</NavLink></li>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/login">Log In</NavLink>
                        </li>
                        <li className="nav-item">
                            <li><NavLink className="nav-link" aria-current="page" to="/watchlist">Watchlist</NavLink></li>
                        </li>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" aria-current="page" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/movies/">Movies</NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" aria-current="page" to="/movies/comingsoon">Coming Soon</NavLink></li>
                                    <li><NavLink className="dropdown-item" aria-current="page" to="/movies/trending">Trending</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" aria-current="page" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/user/">Profile</NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item" aria-current="page" to="/user/profile">My Profile</NavLink>
                                    <li><NavLink className="dropdown-item" aria-current="page" to="/user/collections">Collections</NavLink></li>
                                    <li><NavLink className="dropdown-item" aria-current="page" to="/user/library">Library</NavLink></li>

                                </ul>
                            </li>
                        </ul>
                    </ul>
                    <li className="nav-link">
                        <Movie />
                    </li>
                </div>
            </div>
        </nav>
    )

}

export default Nav;






// import { NavLink } from 'react-router-dom';

// function Nav() {

//     return (
//         <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ color: 'white', backgroundColor: '#2D3260' }}>
//             <div className="container-fluid">
//                 <NavLink className="navbar-brand" to="/">Reelistr</NavLink>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse">
//                     <NavLink className="dropdown-item" aria-current="page" to="/">Home</NavLink>
//                     <NavLink className="dropdown-item" aria-current="page" to="/login">Log In</NavLink>
//                     <NavLink className="dropdown-item" aria-current="page" to="/moviedetails">Movie Details</NavLink>
//                     <NavLink className="dropdown-item" aria-current="page" to="user/profile">Profile</NavLink>
//                     <NavLink className="dropdown-item" aria-current="page" to="/user/collections">Collections</NavLink>
//                     <NavLink className="dropdown-item" aria-current="page" to="/user/watchlist">Watchlist</NavLink>
//                     {/* <ul className="navbar-nav"> */}
//                     {/* <li className="nav-item dropdown">
//                             <NavLink className="nav-link active dropdown-toggle" aria-current="page" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/">menu</NavLink>
//                             <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                                 <li><NavLink className="dropdown-item" aria-current="page" to="/">Home</NavLink></li>
//                                 <li><NavLink className="dropdown-item" aria-current="page" to="/login">Log In</NavLink></li>
//                                 <li><NavLink className="dropdown-item" aria-current="page" to="/moviedetails">Movie Details</NavLink></li>
//                                 <li><NavLink className="dropdown-item" aria-current="page" to="user/profile">Profile</NavLink></li>
//                                 <li><NavLink className="dropdown-item" aria-current="page" to="/collections">Collections</NavLink></li>
//                                 <li><NavLink className="dropdown-item" aria-current="page" to="/watchlist">Watchlist</NavLink></li>
//                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> */}

//                     {/* </ul>
//                 </ul>
//             </li>
//         </ul> */}
//                 </div >
//             </div >
//         </nav >
//     )

// }

// export default Nav;
