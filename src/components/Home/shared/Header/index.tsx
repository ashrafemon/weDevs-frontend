import React from "react";
import {Box, Typography} from "@material-ui/core";
import {Nav, NavItem, useStyles} from "./styled";
import {Link, useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {logout} from "../../../../store/actions/auth/action";

const Header = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout(() => history.replace('/login')))
    }

    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.brand}>
                <Link to="/">Company</Link>
            </Typography>
            <Nav>
                <NavItem>
                    <Typography className={classes.logoutText} onClick={logoutHandler}>Logout</Typography>
                </NavItem>
            </Nav>
        </Box>
    )
}

export default Header
