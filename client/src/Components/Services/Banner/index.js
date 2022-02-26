import React from 'react'
import { Container, Grid, Paper, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Banner = () => {
    return (
        <Container sx={{mt: 15, pb: 10, pt:5}}>
            <Grid container spacing={3}>
                <Grid item md={3}>
                    <Typography variant="h4">Our Services</Typography>
                </Grid>
                <Grid item md={3}>
                    <Paper sx={{p:5}}>
                        <Typography variant="h6" sx={{pb:2}}>Civil Work</Typography>
                        <Typography variant="body1">Adipisicing elit. Consequatur, delectus.</Typography>
                        <ArrowForwardIosIcon size="large" sx={{cursor: 'pointer', mt:2, background: 'blue', borderRadius: 10, color: 'white', p:1.5}}/>
                    </Paper>
                </Grid>
                <Grid item md={3}>
                    <Paper sx={{p:5}}>
                        <Typography variant="h6" sx={{pb:2}}>Electro-Mechanical</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur.</Typography>
                        <ArrowForwardIosIcon size="large" sx={{cursor: 'pointer', mt:2, background: 'blue', borderRadius: 10, color: 'white', p:1.5}}/>
                    </Paper>
                </Grid>
                <Grid item md={3}>
                    <Paper sx={{p:5}}>
                        <Typography variant="h6" sx={{pb:2}}>HSE & Saftey</Typography>
                        <Typography variant="body1">Dolor sit amet consectetur adipisicing elit.</Typography>
                        <ArrowForwardIosIcon size="large" sx={{cursor: 'pointer', mt:2, background: 'blue', borderRadius: 10, color: 'white', p:1.5}}/>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Banner