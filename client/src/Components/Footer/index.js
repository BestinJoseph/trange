import React from 'react'
import { Box, Container, Grid, Link, Typography } from '@mui/material'

import useStyles from './FooterStyles'

const Footer = () => {
    const classes = useStyles()

    return (
        <Box className={classes.footer}>
            <Container sx={{mb: 5}}>
                <Grid container>
                    <Grid item md={4}>
                        location here
                    </Grid>
                    <Grid item md={4}>
                        Contact info
                    </Grid>
                    <Grid item md={4}>
                        More info.
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{bg: 'white', textAlign: 'center'}}>
                <Typography variant="body1">developed by <Link href="https://www.trange.sa" underline="none" target="_blank">@jefsway</Link></Typography>
            </Box>
        </Box>
    )
}

export default Footer
