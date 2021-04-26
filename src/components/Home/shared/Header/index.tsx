import React from "react";
import {Box, Typography} from "@material-ui/core";
import {Nav, NavItem, useStyles} from "./styled";
import {Link} from 'react-router-dom'

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.brand}>
                <Link to="/">Company</Link>
            </Typography>
            <Nav>
                <NavItem>
                    <Link to="/">Products</Link>
                </NavItem>
                <NavItem>
                    <Link to="/">Profile</Link>
                </NavItem>
                <NavItem>
                    <Link to="/">Logout</Link>
                </NavItem>
            </Nav>
        </Box>
    )
}

export default Header
