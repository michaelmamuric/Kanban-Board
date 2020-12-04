import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import classes from './MenuBar.module.css';

const MenuBar = (props) => {
    return (
        <Navbar className={classes.NavBg} sticky="top">
            <Navbar.Brand href="/" className={classes.NavBrand}>Kanban Board</Navbar.Brand>
        </Navbar>
    )
};

export default MenuBar;