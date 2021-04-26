import React from 'react';
import {Box, Card, CardContent, TextField, Typography} from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";
import StyledButton from "../../Shared/StyledButton";
import {Link} from "react-router-dom";
import {useStyles} from "../styled";
import PasswordBox from "../../Shared/PasswordBox";

const Register: React.FC = () => {
    const classes = useStyles()

    return (
        <Box className={classes.wrapper}>
            <Card className={classes.card} elevation={0}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.title}>Sign Up</Typography>
                    <Box className={classes.logoBox}>
                        <StorefrontIcon/>
                    </Box>

                    <Box mb={2}>
                        <TextField
                            label="Name"
                            type="text"
                            fullWidth
                        />
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

                    <StyledButton text="Register"/>

                    <Typography className={classes.accountText}>
                        Already have an account? <Link to="/login">Sign In</Link>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Register
