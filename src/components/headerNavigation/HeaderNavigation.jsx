import { NavLink } from 'react-router-dom';

import './headerNavigation.scss'

const HeaderNavigation = () => {
    return (
        <div className="header_links">
            <NavLink 
                to='/' 
                className='header_link' 
                style={({ isActive }) => ({ color: isActive ? '#DC005C' : 'white' })}>
                    Home
            </NavLink>
            <NavLink 
                to='/Timeline'
                className='header_link'
                style={({ isActive }) => ({ color: isActive ? '#DC005C' : 'white' })}>
                    Timeline
            </NavLink>
            <NavLink 
                to='/BankCard' 
                className='header_link'
                style={({ isActive }) => ({ color: isActive ? '#DC005C' : 'white' })}>
                    Bank card
            </NavLink>
            <NavLink 
                to='/Contacts' 
                className='header_link'
                style={({ isActive }) => ({ color: isActive ? '#DC005C' : 'white' })}>
                    Contacts
            </NavLink>
        </div>
    )
}

export default HeaderNavigation;
