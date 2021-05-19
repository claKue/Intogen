import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click); // warum funktioniert handleClick nicht???
    const closeMobileMenu = () => setClick(false);

    return (   
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        INTOGEN 
                        {/* hier soll Logo hin */}
                    </Link>
                    <div className="menu-icon">
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/visualization" className="nav-links" onClick={closeMobileMenu}>
                                VISUALIZATION
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/findyourtype" className="nav-links" onClick={closeMobileMenu}>
                                FIND YOUR TYPE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
                                ABOUT US
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
