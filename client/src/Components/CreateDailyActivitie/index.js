import React from 'react'
import { Box, Button, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import useStyles from './CreateDailyActivitieStyles'
import { postDailyAct } from '../../Apis/TrackeApi'

const CreateDailyActivitie = () => {
    const classes = useStyles()
    let initialValues = {fullName: '', department: '', project: '', activities: ''}
    const navigate = useNavigate()

    const handleOnSubmit = (Values, actions) => {
        postDailyAct(Values)
        navigate('/')
        actions.resetForm()
    }

    const handleBack = () => {
        navigate('/')
    }

    return (
        <Box className={classes.dailyactivities}>
            <Box>
                <Box sx={{display: 'flex'}}>
                    <ArrowBackIcon sx={{ mr: 2, cursor: 'pointer', width: 42, height: 42, }} onClick={handleBack}/>
                    <Typography variant='h4'>Daily Tracker Form</Typography>
                </Box>
                <Box sx={{width:400, mt:4}}>
                    <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
                        <Form>
                            <Box sx={{mb: 2}}>
                                <Field name="fullName" type="text" label="Your Name" as={TextField} fullWidth/>
                            </Box>
                            <Box sx={{mb: 2}}>
                                <Field name="department" type="text" label="Your Department" as={TextField} fullWidth/>
                            </Box>
                            <Box sx={{mb: 2}}>
                                <Field name="project" type="text" label="Project Name" as={TextField} fullWidth/>
                            </Box>
                            <Box sx={{mb: 2}}>
                                <Field name="activities" type="text" placeholder="Todays Activities" as={TextareaAutosize} minRows={10}/>
                            </Box>
                            <Button variant="contained" color="success" size="large" type="submit">Submit</Button>
                        </Form>
                    </Formik>
                </Box>
            </Box>
        </Box>
    )
}

export default CreateDailyActivitie
