import React from 'react'
import { Box, Container, Typography } from '@mui/material'

import useStyles from './ClientsStyles'

const Clients = () => {
    const classes = useStyles()

    return (
        <Box className={classes.clients}>
            <Container>
                <Typography variant="h4">Clients</Typography>
                <Box sx={{my:6}}>
                    clients list.
                </Box>
            </Container>
        </Box>
    )
}

export default Clients