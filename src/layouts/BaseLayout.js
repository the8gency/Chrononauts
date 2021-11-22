import React from 'react';
import Header from '../components/layout/Header/Header';

const BaseLayout = ({ children }) => {
    return (
        <>
            <Header />
            { children }
        </>
    )
}

export default BaseLayout;
