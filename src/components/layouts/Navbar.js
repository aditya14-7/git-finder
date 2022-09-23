import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar bg-primary">
                <h2>
                    <Link to='/'><i className={props.icon}></i> {props.title}</Link>
                    <ul>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </h2>
            </nav>
        </div>
    );
}

Navbar.defaultProps = {
    title: 'Git finder',
    icon: 'fa-solid fa-bug'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;