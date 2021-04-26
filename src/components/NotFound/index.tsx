import React from "react";
import {Box, Typography} from "@material-ui/core";
import {useStyles} from "./styled";

const NotFound = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.title}>Oops</Typography>
            <Typography className={classes.subTitle}>The page you are looking for isn't here.</Typography>
        </Box>
    )
}

export default NotFound
