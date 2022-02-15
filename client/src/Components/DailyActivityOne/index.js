import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate, useParams } from 'react-router-dom'
import moment from 'moment'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

import useStyles from './DailyActivityOneStyles'

const DailyActivityOne = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const { _id } = useParams()
    const [data, setData] = useState()
    const { activities } = useSelector( state => state.activities )

    useEffect(() => {
        const getOneTrack = () => {
            if(_id === 'undefined' ) {
                return navigate('/')
            }
            const dat = activities.filter( act => act._id === _id)[0]
            setData(dat)
        }

        getOneTrack()
    },[_id, activities, navigate])

    const handleBack = () => {
        navigate('/')
    }

    return (
        <Box className={classes.dailyactivityone}>
            <Box className={classNames('nav_header')}>
                <ArrowBackIcon sx={{size: 'large', cursor: 'pointer', width: 30, height: 30, mr: 2}} onClick={handleBack}/>
                <Typography variant='h6'>{ data && `${data.fullName}'s Daily Activities` }</Typography>
            </Box>
            <Box className={classNames('activity_container')}>
                <Typography variant="body1" sx={{mb:1}}>Emp. ID: {data && data.number}</Typography>
                <Typography variant="body1">Date: {data && moment(data.createdAt).format("Do MMM, YYYY")}</Typography>
                <Box sx={{ mt:3 }} className={classNames('activity_lists_container')}>
                    <Typography variant="h6" sx={{pb:3}}>My Activities:</Typography>
                    <Typography variant="body1">Project: {data ? data.project : null}</Typography>
                    <ul className={classNames('activities_lists')}>
                        {
                            data && data.activities.split('\n').map( (activity, i) => (
                                <li key={i} className={classNames('list_item')}><Typography variant="body1">{activity}</Typography></li>
                            ))
                        }
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}

export default DailyActivityOne
