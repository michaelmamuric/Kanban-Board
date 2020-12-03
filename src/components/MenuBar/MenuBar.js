import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import classes from './MenuBar.module.css';

const MenuBar = (props) => {
    return (
        <Navbar className={classes.NavBg}>
            <Navbar.Brand href="#" className={classes.NavBrand}>Productivity App</Navbar.Brand>
        </Navbar>
    )
};

export default MenuBar;