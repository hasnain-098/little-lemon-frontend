import './Header.css';
import logo from '../assets/logo.jpg';
import Nav from './Nav';
import { useState } from 'react';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className='header-container'>
            <img src={logo} alt='Logo' />
            <button className='hamburger' onClick={toggleMenu} aria-label='Toggle Menu'>
                ☰
            </button>
            <Nav menuOpen={menuOpen} />
        </div>
    );
}

export default Header;