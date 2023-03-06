import React from 'react';
import { Typography } from '@mui/material';

const About = (props) => { 
    return(
        <div >
            <Typography
                color="inherit"
                noWrap 
                variant="h3" 
                component="div" 
                sx={{mt: 3, textAlign: 'center'}}
            >
                About
            </Typography>
        </div>
    )
}

export default About;