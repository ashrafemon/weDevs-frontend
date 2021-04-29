import React, {useState} from 'react';
import {useStyles} from "../styled";
import StorefrontIcon from '@material-ui/icons/Storefront';
import {Link, useHistory} from 'react-router-dom'
import StyledButton from "../../Shared/StyledButton";
import {Box, Card, CardContent, TextField, Typography} from "@material-ui/core";
import PasswordBox from "../../Shared/PasswordBox";
import {useDispatch} from "react-redux";
import {login, toggleNotification} from "../../../store/actions/auth/action";
import { LoginFormType } from '../../../types';

const Login: React.FC = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const [form, setForm] = useState<LoginFormType>({
        email: '',
        password: ''
    })

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (form.email.length && form.email.includes('@') && form.password.length > 5) {
            dispatch(login(form, history))
        } else {
            dispatch(toggleNotification({
                type: 'error',
                text: 'Please fill up all required field*',
                show: true
            }))
        }
    }

    return (
        <Box className={classes.wrapper}>
            <Card className={classes.card} elevation={0}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.title}>Sign In</Typography>
                    <Box className={classes.logoBox}>
                        <StorefrontIcon/>
                    </Box>

                    <form method="post" onSubmit={submitHandler}>
                        <Box mb={2}>
                            <TextField
                                name="email"
                                label="Email"
                                type="email"
                                value={form.email}
                                onChange={inputChangeHandler}
                                fullWidth
                            />
                        </Box>
                        <Box mb={2}>
                            <PasswordBox
                                label="Password"
                                name="password"
                                value={form.password}
                                onChange={inputChangeHandler}
                                fullWidth
                            />
                        </Box>

                        <StyledButton behaviour="submit" text="Login"/>
                    </form>

                    <Typography className={classes.accountText}>
                        Don't have an account? <Link to="/register">Sign Up</Link>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Login
