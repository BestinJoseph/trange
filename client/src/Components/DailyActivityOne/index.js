import React from 'react'
import { Box, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

import useStyles from './DailyActivityOneStyles'

const DailyActivityOne = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

    return (
        <Box className={classes.dailyactivityone}>
            <Box sx={{display: 'flex',}}>
                <ArrowBackIcon sx={{width: 40, height: 40, mr: 2, cursor: 'pointer'}} onClick={handleBack} />
                <Typography variant="h4">get params and filter it.</Typography>
            </Box>
        </Box>
    )
}

export default DailyActivityOne
