import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../assets/logo.png"; // Import the logo image

function NavBar() {
  return (
    <>
      <img src={logo} alt="Logo" className="logo" /> {/* Add the logo outside the nav */}
      <nav className="nav-container">
        <div className="center-links">
          <NavLink to="/" className="navItem" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/cocktails" className="navItem" activeClassName="active">
            CocktailList
          </NavLink>
        </div>
        <NavLink to="/UserProfile" className="navItem userprofile" activeClassName="active">
          User Profile
        </NavLink>
       
      </nav>
    </>
  );
}

export default NavBar;
