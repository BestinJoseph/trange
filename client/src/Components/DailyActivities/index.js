import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { Link } from 'react-router-dom'

import useStyles from './DailyActivitiesStyles'
import { getDailyAct } from '../../Apis/TrackeApi'
import classNames from 'classnames'

const DailyActivities = () => {
    const classes = useStyles()
    const [data, setData] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        const jobs = () => {
            getDailyAct().then(nic=>setData(nic.data))
        }

        jobs()
    },[])

    const handleHome = () => {
        navigate('/create')
    }

    const handleNavigation = (e) => {
        // console.log(e.target.p)
        // navigate(`/${da._id}`)
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
                            <li key={i} className={classNames('daily_lists_item')} onClick={handleNavigation}>
                                <Link to={`/${da._id}`} className={classNames('daily_lists_item_link')}>
                                    <Typography variant="body1" >{da.fullName}'s track of { moment(da.createdAt).format("Do MMM, YYYY") }</Typography>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </Box>
        </Box>
    )
}

export default DailyActivities
