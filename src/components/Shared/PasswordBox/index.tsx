import React, {useState} from "react";
import {Box, IconButton, TextField} from "@material-ui/core";
import {useStyles} from "./styled";
import VisibilityIcon from "@material-ui/icons/Visibility";

type IProps = {
    label: string,
    fullWidth: boolean
}

const PasswordBox: React.FC<IProps> = ({label, fullWidth}) => {
    const classes = useStyles()

    const [show, setShow] = useState(false)
    const showHandler = () => {
        setShow(!show)
    }

    return (
        <Box className={classes.box}>
            <TextField
                label={label}
                type={!show ? 'password' : 'text'}
                fullWidth={fullWidth}
            />
            <IconButton className={classes.btn} onClick={showHandler}>
                <VisibilityIcon/>
            </IconButton>
        </Box>
    )
}

export default PasswordBox
