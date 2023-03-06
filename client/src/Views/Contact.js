import React from 'react';
import { Typography } from '@mui/material';

const Contact = (props) => { 
    return(
        <div >
            <Typography
                color="inherit"
                noWrap 
                variant="h3" 
                component="div" 
                sx={{mt: 3, textAlign: 'center'}}
            >
                Contact
            </Typography>
        </div>
    )
}

export default Contact;