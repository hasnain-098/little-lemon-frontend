import './Nav.css'

const Nav = ({ menuOpen }) => {
    return (
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <ul style={{ listStyle: "none" }}>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;