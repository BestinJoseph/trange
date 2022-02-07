import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Box, Container, Typography, IconButton, Menu, MenuItem, Button, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import PropTypes from 'prop-types'

const HideOnScroll = (props) => {
    const { children, window } = props

    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    })

    return (
        <Slide apprear={false} direction="down" in={!trigger}>{children}</Slide>
    )
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func
}

const Header = (props) => {
    const pages = ['Home', 'About', 'Services', 'projects', 'clients', 'contactus']
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
    const navigate = useNavigate()

    const handleOnclick = () => {
        console.log('nice')
    }

    return (
        <Box>
            <HideOnScroll {...props}>
                <AppBar sx={{background: '#191919', boxShadow: 'none'}}>
                    <Box sx={{textAlign: 'right', background: 'white'}}>
                        <Container>
                            <Typography variant='h6' color="secondary">contact us</Typography>
                        </Container>
                    </Box>
                    <Container>
                        <Toolbar sx={{ justifyContent: 'space-between', height: 80}}>
                            <Box sx={{ flexGrow: 0, mr: 15 }}>
                                <Typography variant="h4" color="white">Tran Ge</Typography>
                            </Box>
                            <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
                                <IconButton><MenuIcon /></IconButton>
                                <Menu sx={{ display: { xs: 'block', md: 'none'} }}>
                                    { pages.map( page => (
                                        <MenuItem key={page} onClick={handleOnclick}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Box sx={{ flexGrow: 0, display: { xs: 'none', md:'flex'} }}>
                                { pages.map( page => (
                                    <Button key={page} onClick={() => navigate(`/${page=== 'Home' ? '' : page.toLowerCase()}`)} sx={{ my:"2", color: 'white', display: 'block'}}>
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
        </Box>
    )
}

export default Header
