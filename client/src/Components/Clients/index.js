import React from 'react'
import { Box, Typography } from '@mui/material'
import Slider from 'react-slick'

import useStyles from './ClientsStyles'
import classNames from 'classnames'

const data = ["Hyundai","Samsung","Helios","Aramco","Sabic","Alfanar","Almarai","Philips"]

const Clients = () => {
    const classes = useStyles()
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    }

    return (
        <Box className={classes.clients}>
            <Typography variant='h4'>Clients</Typography>
            <Box className={classNames('clients_container')}>
                <Slider {...settings}>
                    {
                        data.map((dat,i)=>(
                            <div style={{ border: '1px solid orange', textAlign: 'center',}} key={i}>
                                <h3>{dat}</h3>
                            </div>
                        ))
                    }
                </Slider>
            </Box>
        </Box>
    )
}

export default Clients
