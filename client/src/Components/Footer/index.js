import React from 'react'
import { Box, Container, Grid, Link, Typography } from '@mui/material'

import useStyles from './FooterStyles'
import classNames from 'classnames'

const Footer = () => {
    const classes = useStyles()

    return (
        <Box className={classes.footer}>
            <Box className={classNames('footer_container')}>
                <Container sx={{mb: 5}}>
                    <Grid container>
                        <Grid item md={4}>
                            location
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
                    <Typography variant="body1">Built by <Link href="https://www.trange.sa" underline="none" target="_blank">@jefsway</Link></Typography>
                </Box>
            </Box>
            <Box className={classNames('footer_reserved')}>
                <Typography variant="body1">2022 @ Tran Ge, All Rights are Reserved</Typography>
            </Box>
        </Box>
    )
}

export default Footer
