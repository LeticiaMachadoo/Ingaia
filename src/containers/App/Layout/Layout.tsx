import React from 'react';
import { useTranslation } from 'react-i18next';
import Main from './Layout.style';
import Router from '../Router/Router';
import Navigation from '../Navigation/Navigation';

const Layout = (): JSX.Element => {
    const { t } = useTranslation();
    return (
        <>
            {/* <Header> */}
            <>
                {/* <IconApplelogo color="#000" fontSize="3rem" /> */}
                <h3> {t('title')} </h3>
                <Navigation />
            </>
            {/* </Header> */}
            <Main>
                <Router />
            </Main>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
