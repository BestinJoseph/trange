import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import classNames from 'classnames'

import useStyles from './AboutStyles'

const About = () => {
    const classes = useStyles()

    return (
        <Box className={classes.about}>
            <Container className={classNames('about_container')}>
                <Box style={{ marginBottom: 60}}>
                    <Typography variant="h2">We work very close.</Typography>
                    <Typography variant="h6">Relied by Fortune 500 companies.</Typography>
                </Box>
                <Box>
                    <Grid container spacing={10}>
                        <Grid item md={4}>
                            image.
                            <Typography variant="h4">Why we?</Typography>
                            <Typography variant="body1">Adaptable for any workstyle, role, or device so you can choose when, where, and how you work.</Typography>
                        </Grid>
                        <Grid item md={4}>
                            image.
                            <Typography variant="h4">Vision</Typography>
                            <Typography variant="body1">Adaptable for any workstyle, role, or device so you can choose when, where, and how you work.</Typography>
                        </Grid>
                        <Grid item md={4}>
                            image.
                            <Typography variant="h4">Mision</Typography>
                            <Typography variant="body1">Adaptable for any workstyle, role, or device so you can choose when, where, and how you work.</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classNames('about_section_intro')}>
                    <Typography variant='h3'>Introduction</Typography>
                    <Typography variant="body1">We take an immense pleasure in introducing ourselves as a professionally managed Contracting & Industrial supplies company starting our services and operating in & around India.</Typography>
                    <Button >Read more.</Button>
                </Box>
            </Container>
        </Box>
    )
}

export default About
