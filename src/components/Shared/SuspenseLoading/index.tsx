import React from "react";
import {Box} from "@material-ui/core";
import SpinnerGif from './../../../assets/suspens-loading.gif'
import {useStyles} from "./styled";

const SuspenseLoading: React.FC = () => {
    const classes = useStyles()

    return (
        <Box className={classes.wrapper}>
            <img className={classes.spinner} src={SpinnerGif} alt="Spinner"/>
        </Box>
    )
}

export default SuspenseLoading
