import React from 'react';
import Nav from './Nav/Nav';
import { NavWrapper, StyledHeader } from './style';
import CompanyLogo from '../../../assets/images/logo.svg';

const Header = () => {
    return (
        <StyledHeader>
            <NavWrapper>
                <img src={ CompanyLogo } alt="Chrononauts logo" />
                <Nav />
            </NavWrapper>
        </StyledHeader>
    )
}

export default Header;
