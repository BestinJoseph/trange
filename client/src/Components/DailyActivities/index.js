import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit'

import useStyles from './DailyActivitiesStyles'
import classNames from 'classnames'

const DailyActivities = () => {
    const classes = useStyles()
    const { activities, auth } = useSelector( state => state )
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        activities.length >= 1 && auth.user.firstName && setData( prev => {
            return activities.filter( act => act.fullName.toLowerCase().trim() === auth.user.firstName.toLowerCase() )
        })
    },[setData, activities, auth])

    const handleHome = () => {
        navigate('/create')
    }

    return (
        <Box className={classes.dailyactivities}>
            <Box className={classNames('nav_header')}>
                <Typography variant='h6'>Daily Tracker Log</Typography>
                <AddIcon sx={{size: 'large', cursor: 'pointer', width: 30, height: 30, ml: 2}} onClick={handleHome}/>
            </Box>
            <Box className={classNames('dailyactivities_list_container')}>
                <ul className={classNames('daily_lists')}>
                    {
                        data && data.map( (da, i) => (
                            <li key={i} className={classNames('daily_lists_item')}>
                                <Link to={`/${da._id}`} className={classNames('daily_lists_item_link')}>
                                    <Typography variant="body1" >{ moment(da.createdAt).format("Do MMM, YYYY")}, activities</Typography>
                                </Link>
                                {
                                    moment(da.createdAt).format('DD-MM-yyyy') === moment(Date.now()).format('DD-MM-yyyy') ? <EditIcon /> : null
                                }
                            </li>
                        ))
                    }
                </ul>
            </Box>
        </Box>
    )
}

export default DailyActivities
