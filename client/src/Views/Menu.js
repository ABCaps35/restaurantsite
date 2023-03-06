import React from 'react';
import { Typography } from '@mui/material';

const Menu = (props) => { 
    return(
        <div >
            <Typography
                color="inherit"
                noWrap 
                variant="h3" 
                component="div" 
                sx={{mt: 3, textAlign: 'center'}}
            >
                Menu
            </Typography>
        </div>
    )
}

export default Menu;