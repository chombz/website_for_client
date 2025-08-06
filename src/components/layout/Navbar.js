import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/App.css';

function Navbar()
{
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <Link to='/' className='navbar-brand'>ETP</Link>
                </div>
                <ul className='navbar-menu'>
                    <li><Link to='/' className='navbar-link'>Home</Link></li>
                    <li><Link to='/about' className='navbar-link'>About Us</Link></li>
                    <li><Link to='/activities' className='navbar-link'>Our Activities</Link></li>
                    <li><Link to='/contact' className='navbar-link'>Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
