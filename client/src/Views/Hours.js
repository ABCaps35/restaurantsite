import React from 'react';
import { Typography } from '@mui/material';

const Hours = (props) => { 
    return(
        <div >
            <Typography
                color="inherit"
                noWrap 
                variant="h3" 
                component="div" 
                sx={{mt: 3, textAlign: 'center'}}
            >
                Hours
            </Typography>
        </div>
    )
}

export default Hours;