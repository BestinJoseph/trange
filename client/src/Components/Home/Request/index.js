import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import classNames from 'classnames'
import React from 'react'

import useStyles from './RequestStyles'
// import Profile from './profile'

const Request = () => {
    const classes = useStyles()

    return (
        <Box className={classes.request}>
            <Box style={{ textAlign: 'center' }}>
                <Typography variant="h4">Getting Start Today!</Typography>
                <Typography variant='body1'>We need to know you a little before we reach out to you. Let’s start the conversation!</Typography>
            </Box>
            <Box className={classNames('request_container')}>
                <Grid container>
                    <Grid item md={6}>
                        <Box className={classNames('request_container__download')}>
                            <Grid container spacing={2}>
                                <Grid item md={5}>
                                    <img src={`./profile.png`} alt="Tran Ge Profile pic" height={400}/>
                                </Grid>
                                <Grid item md={7}>
                                    <Typography variant="h5">Download our Profile here.</Typography>
                                    <Typography variant="body1">some information about the downloading stuff.</Typography>
                                    <Box>
                                        <Button variant="contained" color="success">Download</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box>
                            <Typography variant="h5" sx={{mb:5}}>Fill the requirments.</Typography>
                            <Box>
                                <Grid container spacing={3}>
                                    <Grid item md={6}>
                                        <TextField label="First Name" fullWidth InputProps={{classes: { notchedOutline: classes.textField }}} InputLabelProps={{ style: {color: 'white'}}} sx={{ input: { color: 'white' } }}/>
                                    </Grid>
                                    <Grid item md={6}>
                                        <TextField label="Last Name" fullWidth InputProps={{classes: { notchedOutline: classes.textField}}} InputLabelProps={{ style: {color: 'white'}}} sx={{ input: { color: 'white' } }}/>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{my: 5}}>
                                <Grid container spacing={3}>
                                    <Grid item md={4}>
                                        <TextField label="Bussiness Email" fullWidth InputProps={{classes: { notchedOutline: classes.textField}}} InputLabelProps={{ style: {color: 'white'}}} sx={{ input: { color: 'white' } }}/>
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField label="Phone Number" fullWidth InputProps={{classes: { notchedOutline: classes.textField}}} InputLabelProps={{ style: {color: 'white'}}} sx={{ input: { color: 'white' } }}/>
                                    </Grid>
                                    <Grid item md={4}>
                                        <TextField label="Company Website" fullWidth InputProps={{classes: { notchedOutline: classes.textField}}} InputLabelProps={{ style: {color: 'white'}}} sx={{ input: { color: 'white' } }}/>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <TextField label="Where are you based?" fullWidth InputProps={{classes: { notchedOutline: classes.textField}}} InputLabelProps={{ style: {color: 'white'}}} sx={{ input: { color: 'white' } }}/>
                            </Box>
                            <Box sx={{mt: 5}}>
                                <Button variant="contained" size="large" color="success">Let's Talk</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Request
