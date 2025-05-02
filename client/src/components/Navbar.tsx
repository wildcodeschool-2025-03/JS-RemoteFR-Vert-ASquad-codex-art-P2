import { NavLink } from "react-router";
import logo from "../assets/images/logo-codexart-sans-bg.png";
import "../styles/Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img className="Logo" src={logo} alt="Logo Codex Art" />
      </NavLink>
      <span className="navlinks">
        <NavLink to="/">Accueil </NavLink>|
        <NavLink to="/Galerie">Galerie </NavLink>|
        <NavLink to="/Musees">Musées </NavLink>|
        <NavLink to="Contact">Contact </NavLink>
      </span>
    </nav>
  );
}
