import React from 'react';
import { Link } from 'react-router-dom';
import * as Paths from '../../../../routes';
import { StyledNav } from './style';

const Nav = () => {
    return (
        <StyledNav>
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
        </StyledNav>
    )
}

export default Nav;
