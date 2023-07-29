import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { useAuth0 } from "@auth0/auth0-react";
import userEvent from '@testing-library/user-event';

const Navbar = () => {

    const [active, setActive] = useState('navBar');
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();

    const showNav = () => {
        setActive('navBar activeNavbar');
    }

    const removeNav = () => {
        setActive('navBar');
    }

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdOutlineTravelExplore className="icon" />  Travel.</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                        {
                            isAuthenticated && (
                                <li><p>{user.name}</p></li>
                            )
                        }
                        {
                            isAuthenticated ? (
                                <li>
                                    <button className='navItem ' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                                </li>
                            ) : (
                                <li>
                                    <button className='navItem ' onClick={() => loginWithRedirect()}>Log In</button>
                                </li>
                            )
                        }

                        <button className="btn">
                            <a href="https://www.goindigo.in/">Book Now</a>
                        </button>
                    </ul>
                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className='icon' />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    )
};

export default Navbar;
