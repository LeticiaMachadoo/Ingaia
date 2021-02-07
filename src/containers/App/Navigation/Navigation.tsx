import React from 'react';
import { Menu } from 'antd';
import { Link } from '@reach/router';

const navigationItems = () => {
    const navItems = [
        {
            itemKey: '1',
            to: '/page1',
            label: 'Page1',
        },
        {
            itemKey: '2',
            to: '/page2',
            label: 'Page2',
        },
    ];

    return navItems.map(({ itemKey, label, to }) => (
        <Menu.Item key={itemKey}>
            <Link to={to}>{label}</Link>
        </Menu.Item>
    ));
};

const Layout = (): JSX.Element => {
    return (
        <Menu mode="horizontal">
            <>{navigationItems()}</>
        </Menu>
    );
};

export default Layout;
