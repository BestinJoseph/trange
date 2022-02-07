import { Box, Container, Typography } from '@mui/material'
import React from 'react'

import useStyles from './DifferenceStyles'
import data from './differenc.json'

const Difference = () => {
    const classes = useStyles()

    return (
        <Box className={classes.difference}>
            <Container>
                <Box>
                    <Typography variant="h2">What makes the difference?</Typography>
                    <Typography variant="body1">{data.intro}</Typography>
                </Box>
                <Box sx={{mt: 8, }}>
                    <Typography variant="h6" sx={{mb:3}}>{data.title}</Typography>
                    <Box sx={{pl: 5}}>
                        {
                            data.items.map((item, index)=>(
                                <Typography variant="body1" key={index} sx={{mb:2}}>{item}</Typography>
                            ))
                        }
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Difference
