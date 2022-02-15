import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

import useStyles from './ProjectsStyles'
import data from './projectData.json'
import classNames from 'classnames'

const Projects = () => {
    const classes = useStyles()
    
    return (
        <Box className={classes.projects}>
            <Container>
                <Typography variant="h4">Our Projects</Typography>
                <ul className={classNames('project_content_ul')}>
                    {
                        data.intros.map( (int, index) => (
                            <li key={index}>{int}</li>
                        ))
                    }
                </ul>
                <Box sx={{mb:10}}>
                    <Typography variant="h4">Project List</Typography>
                    <Grid container spacing={3} sx={{mt:4}}>
                        {
                            data && data.projects.map( (pro, index) => (
                                <Grid item md={4} key={index}>
                                    <img src={pro.images} alt={pro.name} width="100%"/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Projects
