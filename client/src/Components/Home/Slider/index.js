import React from 'react'
import { Box } from '@mui/system'
import { Button, Container, Grid, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import classNames from 'classnames'

import useStyles from './SliderStyles'
import slide from '../../../Assets/Images/image_001.jpeg'

const Slider = () => {
    const classes = useStyles()

    return (
        <Box className={classes.slider}>
            <Container className={classNames('container')}>
                <Grid container>
                    <Grid item md={6} className={classNames('content_section')}>
                        <Box className={classNames('content_container')}>
                            <Typography variant="h2">Building for tomorrow. We create possibility</Typography>
                            <Typography variant="body1">Committed to providing the best possible construction expertise & service to ensure cost effective and successful projects.</Typography>
                            <Box>
                                <Button variant="contained" color="success" size="large">Easy Quote</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} className={classNames('images_section')}>
                        <Box className={classNames('image_container')}>
                            <Box className={classNames('slide_content')}>
                                <Box className={classNames('slide_inner_content')}>
                                    <Box>nice life</Box>
                                    <Box className={classNames('slide_footer')}>
                                        <Typography variant="body1" color="black">learn more</Typography>
                                        <ArrowForwardIcon color="black"/>
                                    </Box>
                                </Box>
                            </Box>
                            <img src={slide} alt="cool" className={classNames('bg_slide_image')} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Slider
