import React from 'react'
import { Container, Grid, Paper, Typography } from '@mui/material'

const OurProcess = () => {

    return (
        <Container sx={{pb:15, pt: 5}}>
            <Grid container spacing={3}>
                <Grid item md={6} >
                    <img src="/assets/images/services/civilwork.jpg" alt="civil work" width="100%"/>
                </Grid>
                <Grid item md={6} sx={{mt:4}}>
                    <Typography variant="h3" sx={{fontWeight: 700, ml:3}}>How we work?</Typography>
                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <Paper sx={{p:3,}} elevation={0}>
                                <Typography variant="h2" sx={{color: 'blue', fontWeight: 700}}>01</Typography>
                                <Typography variant="h4">Send Request</Typography>
                                <Typography variant="body1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, architecto!</Typography>
                            </Paper>
                            <Paper sx={{p:3}} elevation={0}>
                                <Typography variant="h2" sx={{color: 'blue', fontWeight: 700}}>03</Typography>
                                <Typography variant="h4">PO</Typography>
                                <Typography variant="body1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, architecto!</Typography>
                            </Paper>
                        </Grid>
                        <Grid item md={6}>
                            <Paper sx={{p:3}} elevation={0}>
                                <Typography variant="h2" sx={{color: 'blue', fontWeight: 700}}>02</Typography>
                                <Typography variant="h4">After Proposal</Typography>
                                <Typography variant="body1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, architecto!</Typography>
                            </Paper>
                            <Paper sx={{p:3}} elevation={0}>
                                <Typography variant="h2" sx={{color: 'blue', fontWeight: 700}}>04</Typography>
                                <Typography variant="h4">Work Starts</Typography>
                                <Typography variant="body1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, architecto!</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default OurProcess