import React from 'react';
import { Link } from 'react-router-dom';
import * as Paths from '../../../../routes';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={ Paths.LANDING }>Home</Link>
                </li>
                <li>
                    <Link to={ Paths.SERVICES }>Services</Link>
                </li>
                <li>
                    <Link to={ Paths.CONTACT }>Contact</Link>
                </li>
                <li>
                    <Link to={ Paths.ABOUT }>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
