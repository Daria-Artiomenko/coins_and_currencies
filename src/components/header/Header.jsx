import { Link } from 'react-router-dom';
import HeaderNavigation from '../headerNavigation/HeaderNavigation';
import Switch from '../switch/Switch';

import logo from '../../assets/logo/logo.svg';
import './header.scss';


const Header = () => {

    return(
        <header className='header-main'>
            <div className="header-container">
                <Link to='/'>
                    <img src={logo} alt="logo" className='header-logo'/>
                </Link>
                <HeaderNavigation/>
                <Switch/>
            </div>
        </header>
    )

}

export default Header;