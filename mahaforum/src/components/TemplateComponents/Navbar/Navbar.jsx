import React from 'react';
import {NavbarRoutes} from '../../../routes/routes'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
            <nav className="navbar">
                <div className="nav-logo">
                    <NavLink exact to='/' className='nav-links nav-logo'>
                        MahaForum
                    </NavLink>
                </div>

                <div className="nav-menu">
                    <ul>
                    {
                        NavbarRoutes.map((item, index)=>{
                            return (
                                <NavLink exact to = {NavbarRoutes[index].path} className='nav-links' key={index}>{NavbarRoutes[index].label} </NavLink>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar;
