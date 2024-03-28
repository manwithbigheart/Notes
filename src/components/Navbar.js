import './css/Navbar.css';
import React from 'react';
import logo from '../res/logo1.png';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';

function Navbar()
{
    
    return (
        <>
            <nav className="navbar background">
                <div className='container'>
                    <div className='logo-container'>
                        <div className="logo">
                            <img src={logo} alt="logo" width={50} height={50}/>
                        </div>
                        <h2>Notes</h2>
                    </div>
                    <ul className="nav-list">
                        <li> <NavLink  to="/" exact activeClassName="active">Home</NavLink> </li>
                        <li> <NavLink  to="/" exact activeClassName="active">Features</NavLink> </li>
                        <li> <NavLink  to="/" exact activeClassName="active">Contact Us</NavLink> </li>
                        <li> <NavLink  to="/" exact activeClassName="active">About</NavLink> </li>
                    </ul>

                    <div className="rightNav">
                        <input className="search search-input" placeholder='Search'/>
                        <button className="search-btn"><SearchIcon /></button>
                    </div>
                </div>
                
            </nav>
        </>
       )
}
export default Navbar