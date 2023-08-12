import './css/Navbar.css';
import React from 'react';
import logo from '../res/logo1.png'
import SearchIcon from '@mui/icons-material/Search';

function Navbar()
{
    
    return (
        <React.Fragment>
            <nav className="navbar background">
                <div className="logo">
                        <img src={logo} alt="logo" width={50} height={50}/>
                </div>
                <h2>Notes</h2>
                <ul className="nav-list">
                    <li><a href="#Home" >Home</a></li>
                    <li><a href="#Sevices" >Services</a></li>
                    <li><a href="#Contact" >Contact</a></li>
                    <li><a href="#About" >About</a></li>
                </ul>

                <div className="rightNav">
                    <input className="search search-input" placeholder='Search'/>
                    <button className="search-btn"><SearchIcon /></button>
                </div>
            </nav>
        </React.Fragment>
       )
}
export default Navbar