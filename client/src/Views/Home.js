import React from 'react';
import { Typography } from '@mui/material';

const Home = (props) => { 
    return(
        <div >
            <Typography
                color="inherit"
                noWrap 
                variant="h3" 
                component="div" 
                sx={{mt: 3, textAlign: 'center'}}
            >
                Home
            </Typography>
        </div>
    )
}

export default Home;