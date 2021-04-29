import React from "react";
import {Box, Grid} from "@material-ui/core";
import {useStyles} from "./styled";
import SideNav from "./shared/SideNav";
import AdminNavbar from "./shared/AdminNavbar";

type IProps = {
    children: React.ReactNode
}

const AdminLayout: React.FC<IProps> = ({children}) => {

    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <AdminNavbar/>

            <Grid container>
                <Grid item sm={3} xs={12} className={classes.gridItem}>
                    <SideNav/>
                </Grid>
                <Grid item sm={9} xs={12} className={classes.gridItem}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    )
}

export default AdminLayout
