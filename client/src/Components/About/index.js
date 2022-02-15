import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

import useStyles from './AboutStyles'
import data from './about.json'

const About = () => {
    const classes = useStyles()
    
    return (
        <Box className={classes.about}>
            <Container>
                <Box sx={{pb:8}}>
                    <Typography variant="h4">Introduction</Typography>
                    <ul>
                        {
                            data && data.introduction.map( (intro, index) => (
                                <li key={index}>{intro}</li>
                            ))
                        }
                    </ul>
                </Box>
                <Box sx={{pb:8}}>
                    <Typography variant="h4">Who we are!</Typography>
                    <ul>
                        {
                            data && data.whoweare.map( (who, index) => (
                                <li key={index}>{who}</li>
                            ))
                        }
                    </ul>
                </Box>
                <Box sx={{pb:8}}>
                    <Typography variant="h4">Our Vision & Mission</Typography>
                    <Grid container>
                        <Grid item md={6}>
                            <RemoveRedEyeIcon />
                            <Typography variant="h5">Vision</Typography>
                            <Typography variant="body1">To maintain a world class technical sophistication with complete customer satisfaction and enhancing shareholder's value by building on our strengths.</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <ArrowUpwardIcon />
                            <Typography variant="h5">Mision</Typography>
                            <Typography variant="body1">To maintain the highest levels of professionalism, integrity and honesty in our relationship with our stake holders with quality engineering and world class service.</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{pb:8}}>
                    <Typography variant="h4">Our Organization</Typography>
                    <img src="/organization.png" alt="oraganization chart" width="100%"/>
                </Box>
            </Container>
        </Box>
    )
}

export default About
