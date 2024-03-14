import HeaderNavigation from '../headerNavigation/HeaderNavigation';
import Switch from '../switch/Switch';
import logo from '../../assets/logo/logo.svg';

import './header.scss';


const Header = () => {

    return(
        <div className='header-main'>
            <img src={logo} alt="logo" className='header-logo'/>
            <HeaderNavigation/>
            <Switch/>
        </div>
    )

}

export default Header;