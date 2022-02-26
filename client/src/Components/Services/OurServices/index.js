import React from 'react'
import { Box, Container, Grid, List, ListItem, Paper, Typography } from '@mui/material'

import data from '../data.json'

const OurServices = () => {

    return (
        <Box sx={{mb:10}}>
            <Grid container spacing={2} sx={{mb:10, px:3}}>
                <Grid item md={2}>
                    <Paper sx={{position:'relative', overflow: 'hidden', height: 300}} elevation={0}>
                        <img src="/assets/images/services/civilwork.jpg" alt="civil" height="100%" />
                        <Box sx={{position: 'absolute', bottom:20, left: 20}}>
                            <Typography variant="h5" sx={{color: 'white', background: 'blue', p:'2px 15px 2px 5px' }}>Civil Works</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={2}>
                    <Paper sx={{position:'relative', overflow: 'hidden', height: 300}} elevation={0}>
                        <img src="/assets/images/services/electricwork.png" alt="civil" height="100%" />
                        <Box sx={{position: 'absolute', bottom:20, left: 20}}>
                            <Typography variant="h5" sx={{color: 'white', background: 'blue', p:'2px 15px 2px 5px' }}>Electric Works</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={2}>
                    <Paper sx={{position:'relative', overflow: 'hidden', height: 300}} elevation={0}>
                        <img src="/assets/images/services/mechanicalwork.jpg" alt="civil" height="100%" />
                        <Box sx={{position: 'absolute', bottom:20, left: 20}}>
                            <Typography variant="h5" sx={{color: 'white', background: 'blue', p:'2px 15px 2px 5px' }}>Mechanical Works</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={2}>
                    <Paper sx={{position:'relative', overflow: 'hidden', height: 300}} elevation={0}>
                        <img src="/assets/images/services/hsework.jpg" alt="civil" height="100%" />
                        <Box sx={{position: 'absolute', bottom:20, left: 20}}>
                            <Typography variant="h5" sx={{color: 'white', background: 'blue', p:'2px 15px 2px 5px' }}>HSE Works</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={2}>
                    <Paper sx={{position:'relative', overflow: 'hidden', height: 300}} elevation={0}>
                        <img src="/assets/images/services/commissioningwork.jpg" alt="civil" height="100%" />
                        <Box sx={{position: 'absolute', bottom:20, left: 20}}>
                            <Typography variant="h5" sx={{color: 'white', background: 'blue', p:'2px 15px 2px 5px' }}>Commissioning</Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={2}>
                    <Paper sx={{position:'relative', overflow: 'hidden', height: 300}} elevation={0}>
                        <img src="/assets/images/services/fabricationwork.jpg" alt="civil" height="100%" />
                        <Box sx={{position: 'absolute', bottom:20, left: 20}}>
                            <Typography variant="h5" sx={{color: 'white', background: 'blue', p:'2px 15px 2px 5px' }}>Fabrication</Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <Container>
                {
                    data && data.services.map( (service, i) => (
                        <Box key={i}>
                            {
                                service.name === 'Civil' ? (
                                    <Box>
                                        <Typography variant="h3">{ service.name}</Typography>
                                        <List>
                                            {
                                                service && service.description.map( (des, index) => (
                                                    <ListItem key={index}><Typography variant="body1">{des}</Typography></ListItem>
                                                ))
                                            }
                                        </List>
                                    </Box>
                                ) : null
                            }
                        </Box>
                    ))
                }
            </Container>
        </Box>
    )
}

export default OurServices