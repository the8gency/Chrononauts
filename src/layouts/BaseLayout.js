import React from 'react';
import Header from '../components/layout/Header/Header';
import { GlobalStyling } from '../style/GlobalStyle';

const BaseLayout = ({ children }) => {
    return (
        <>
            <GlobalStyling />
            <Header />
            { children }
        </>
    )
}

export default BaseLayout;
