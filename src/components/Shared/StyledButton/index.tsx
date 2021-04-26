import React from "react";
import {useStyles} from "./styled";
import {Box, Button} from "@material-ui/core";

type IProps = {
    text: string
}

const StyledButton: React.FC<IProps> = ({text}) => {
    const classes = useStyles()
    return (
        <Box className={classes.box}>
            <Button className={classes.button} variant="contained">{text}</Button>
        </Box>
    )
}

export default StyledButton
