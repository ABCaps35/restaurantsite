import React from 'react';
import { Typography } from '@mui/material';

const Directions = (props) => { 
    return(
        <div >
            <Typography
                color="inherit"
                noWrap 
                variant="h3" 
                component="div" 
                sx={{mt: 3, textAlign: 'center'}}
            >
                Directions
            </Typography>
        </div>
    )
}

export default Directions;