import React from 'react';
import {useStyles} from "../styled";
import StorefrontIcon from '@material-ui/icons/Storefront';
import {Link} from 'react-router-dom'
import StyledButton from "../../Shared/StyledButton";
import {Box, Card, CardContent, TextField, Typography} from "@material-ui/core";
import PasswordBox from "../../Shared/PasswordBox";

const Login: React.FC = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Card className={classes.card} elevation={0}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.title}>Sign In</Typography>
                    <Box className={classes.logoBox}>
                        <StorefrontIcon/>
                    </Box>

                    <Box mb={2}>
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                        />
                    </Box>
                    <Box mb={2}>
                        <PasswordBox
                            label="Password"
                            fullWidth
                        />
                    </Box>

                    <StyledButton text="Login"/>

                    <Typography className={classes.accountText}>
                        Don't have an account? <Link to="/register">Sign Up</Link>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Login
