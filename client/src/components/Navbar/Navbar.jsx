import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">BugTracker</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Dashboard</Link>
          <Link to="/new" className="nav-link">Report Bug</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;