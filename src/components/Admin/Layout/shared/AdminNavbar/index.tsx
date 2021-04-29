import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

const AdminNavbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>weDevs Store Admin Panel</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AdminNavbar
