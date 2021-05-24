import React, {useState} from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import './Navbar.css';
import {NavDropdown} from 'react-bootstrap'
import logo from './assets/logo.jpg'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click); // warum funktioniert handleClick nicht???
    const closeMobileMenu = () => setClick(false);

    return (   
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={logo} style={{width:300}} alt="Logo"/>
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
                            <NavDropdown title="VISUALIZATION" className="nav-links" > 
                                {/* <i className="fas fa-angle-down" />   */}
                                <Link to="/nationality" className="nav-links" onClick={closeMobileMenu}>
                                    NATIONALITY
                                </Link>
                                <Link to="/education" className="nav-links" onClick={closeMobileMenu}>
                                    EDUCATION DEGREE
                                </Link>
                            </NavDropdown>
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
            <hr class="border2" />
        </>
    )
}

export default Navbar;
