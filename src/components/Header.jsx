
import { Link } from 'react-router-dom'; 
import '../style/Header.css'; 

const Header = () => {
  return (
    <header>
      <nav >
        <h1>Better</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/mortgage-calculator">Mortgage Calculator</Link></li>
          <li><Link to="/start">Start</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
