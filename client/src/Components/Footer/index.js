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
                            <Typography variant="h4" sx={{mb:4}}>Tran <span sx={{color: 'orange'}}>Ge</span></Typography>
                            <Box sx={{mt:1}}>
                                <Typography varian="body1" sx={{color: '#47526f', pb: .5}}>Address first Line</Typography>
                                <Typography varian="body1" sx={{color: '#47526f', pb: .5}}>Second Line, Damam</Typography>
                                <Typography varian="body1" sx={{color: '#47526f', pb: .5}}>Pin Code, Kingdom of Saudi Arabia</Typography>
                                <Typography varian="h5" sx={{fontWeight: 'bold', pb: .5}}>+(91) 57 568 7894</Typography>
                                <Typography varian="h5" sx={{fontWeight: 'bold', pb: .5}}>info@trange.sa</Typography>
                                <Typography varian="h5" sx={{fontWeight: 'bold', pb: .5, color: '#35405d'}}>Map / Direction</Typography>
                            </Box>
                        </Grid>
                        <Grid item md={4} className={classNames('footer_links_container')}>
                            <Typography variant="h4" sx={{mb:4}}>Category</Typography>
                            <Box className={classNames('links_section')}>
                                <ul className={classNames('link_ul')}>
                                    <li className={classNames('link_ul_li')}><Link className={classNames('link_a')} to="/civil">Civil</Link></li>
                                    <li className={classNames('link_ul_li')}><Link className={classNames('link_a')} to="/Electrical">Electrical</Link></li>
                                    <li className={classNames('link_ul_li')}><Link className={classNames('link_a')} to="/undergroundcable">Under Ground Cable</Link></li>
                                    <li className={classNames('link_ul_li')}><Link className={classNames('link_a')} to="/testingcommissioning">Testing & Commissioning</Link></li>
                                    <li className={classNames('link_ul_li')}><Link className={classNames('link_a')} to="/draftingservices">Drafting Services</Link></li>
                                    <li className={classNames('link_ul_li')}><Link className={classNames('link_a')} to="/fabrication">Fabrication</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item md={4}>
                            <Typography variant="h4" sx={{mb:4}}>Recent Projects</Typography>
                            <Box>
                                <ul>
                                    <li>Bolevard</li>
                                    <li>KKIA</li>
                                    <li>Hyundai Shutdown Work</li>
                                    <li>Railway: Jeddah - Damam</li>
                                </ul>
                            </Box>
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
