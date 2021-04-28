import React, {useState} from 'react';
import {Box, Card, CardContent, TextField, Typography} from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";
import StyledButton from "../../Shared/StyledButton";
import {Link, useHistory} from "react-router-dom";
import {useStyles} from "../styled";
import PasswordBox from "../../Shared/PasswordBox";
import {useDispatch} from "react-redux";
import {register, toggleNotification} from "../../../store/actions/auth/action";

type RegisterFormType = {
    name: string,
    email: string,
    password: string
}

const Register: React.FC = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const [form, setForm] = useState<RegisterFormType>({
        name: '',
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
        if (form.name.length > 3 && form.email.length && form.email.includes('@') && form.password.length > 5) {
            dispatch(register(form, history))
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
                    <Typography className={classes.title}>Sign Up</Typography>
                    <Box className={classes.logoBox}>
                        <StorefrontIcon/>
                    </Box>

                    <form method="POST" onSubmit={submitHandler}>
                        <Box mb={2}>
                            <TextField
                                label="Name"
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={inputChangeHandler}
                                fullWidth
                            />
                        </Box>

                        <Box mb={2}>
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
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

                        <StyledButton behaviour="submit" text="Register"/>
                    </form>


                    <Typography className={classes.accountText}>
                        Already have an account? <Link to="/login">Sign In</Link>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Register
