import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

import useStyles from './ServicesStyles'
import data from './services.json'
import classNames from 'classnames'

const Services = () => {
    const classes = useStyles()
    console.log(process.env.PUBLIC_URL)

    return (
        <Box className={classes.services}>
            <Container>
                <Typography variant='h3'sx={{mb:3}}>{data.title}</Typography>
                <Typography variant="body1">some text goes here about services.</Typography>
                <Box sx={{mt:5}}>
                    <Grid container spacing={4}>
                        {
                            data.items.map((it, index) => (
                                <Grid item md={3} className={classNames('service_item')} key={index}>
                                    <Box className={classNames('service_item__container')}>
                                        <Box>
                                            <img src={`./assets/images/${it.name.toLowerCase()}.png`} alt={it.name} width={100}/>
                                            <Typography variant="h6">{it.name}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Services
