import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ToglerButton from '../Functional/ToglerButton';

const Navbar = ({ title, icon }) =>
    (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">

                <Link className="navbar-brand" to="/">
                    <i className={icon}></i>{title}
                </Link>
                <ToglerButton />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <br /><br /><br />
        </>
    )

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github fa-1x mr-1'
}

Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Navbar