import React from "react";
import {useStyles} from "./styled";
import {Box, Button} from "@material-ui/core";

type IProps = {
    text: string,
    behaviour?: string
}

const StyledButton: React.FC<IProps> = ({text, behaviour}) => {
    const classes = useStyles()

    return (
        <Box className={classes.box}>
            <Button
                type={behaviour === 'submit' ? 'submit' : 'button'}
                className={classes.button}
                variant="contained"
            >
                {text}
            </Button>
        </Box>
    )
}

export default StyledButton
