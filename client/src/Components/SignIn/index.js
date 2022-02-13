import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'

import useStyles from './SingInStyles'
import { Link } from 'react-router-dom'
import { userLogin } from '../../Actions/AuthAction'

const SignIn = () => {
    const classes = useStyles()
    const initialValues = {username: '', password: ''}
    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        dispatch(userLogin(values))
        actions.resetForm()
    }

    return (
        <Box className={classes.signin}>
            <Box className={classNames('sign_in_container')}>
                <img src="/logo512.png" alt="MOJCE" className={classNames('sign_in_logo')}/>
                <Box className={classNames('auth_form_container')}>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        <Form autoComplete='off'>
                            <Box sx={{mb:2}}>
                                <Field name="username" type="text" as={TextField} fullWidth/>
                            </Box>
                            <Box sx={{mb:3}}>
                                <Field name="password" type="password" as={TextField} fullWidth/>
                            </Box>
                            <Box>
                                <Button type="submit" variant="contained" color="success" size="large">Sign In</Button>
                            </Box>
                        </Form>
                    </Formik>
                </Box>
                <Link to="/">Forgot the password, click here.</Link>
            </Box>
        </Box>
    )
}

export default SignIn
