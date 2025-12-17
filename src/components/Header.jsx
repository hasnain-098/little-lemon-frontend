import logo from '../assets/logo.jpg'
import Nav from './Nav';

const Header = () => {
    return (
        <>
            <img src={logo} alt='Logo' />
            <Nav />
        </>
    );
}

export default Header;