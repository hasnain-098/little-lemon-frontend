import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul style={{ listStyle: "none" }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;