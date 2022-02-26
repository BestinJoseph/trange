import React from 'react'
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'

const ContactIntro = () => {
    return (
        <Box sx={{mt:15, mb:15}}>
            <Box sx={{pt:10, pb:8, display: 'flex', alignItems: 'center', flexDirection: 'column',}}>
                <Typography variant="h4">Contact Us</Typography>
                <Typography variant="body1" sx={{fontWeight: 400, mt:2}}>Have any Question? We'd love to here from you.</Typography>
            </Box>
            <Container>
                <Grid container spacing={5} sx={{display: 'flex', justifyContent:'center', alignItems: 'center',}}>
                    <Grid item md={3}>
                        <Paper sx={{display:'flex', flexDirection:'column', justifyContent: 'space-between', height: 250, p:3, borderTop: '7px solid palegreen', borderRadius: '7px'}}>
                            <Box>
                                <Typography variant="h5">Location</Typography>
                                <Typography variant="body1">IBN Zaidun Street</Typography>
                            </Box>
                            <Box>
                                <Button>Visit our office</Button>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item md={3}>
                        <Paper sx={{display:'flex', flexDirection:'column', justifyContent: 'space-between', height: 300, p:3, borderTop: '7px solid blue', borderRadius: '7px'}}>
                            <Box>
                                <Typography variant="h5">Location</Typography>
                                <Typography variant="body1">IBN Zaidun Street</Typography>
                            </Box>
                            <Box>
                                <Button>Submit Your Request</Button>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item md={3}>
                        <Paper sx={{display:'flex', flexDirection:'column', justifyContent: 'space-between', height: 250, p:3, borderTop: '7px solid orange', borderRadius: '7px'}}>
                            <Box>
                                <Typography variant="h5">Sales</Typography>
                                <Typography variant="body1">+966 56 784 4578</Typography>
                            </Box>
                            <Box>
                                <Button>Dail us</Button>
                            </Box>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}

export default ContactIntro