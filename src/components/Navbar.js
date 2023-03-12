import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <Link to="/" className="nav" id="nav"> Home </Link> | <Link to="/favoritos"  className="nav" id="nav"> Favoritos </Link>
    </nav>
  );
}
