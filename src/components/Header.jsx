import logo from '../assets/logo.jpg'
import Nav from './Nav';

function Header() {
    return (
        <>
            <img src={logo} alt='Logo' />
            <Nav />
        </>
    );
}

export default Header;