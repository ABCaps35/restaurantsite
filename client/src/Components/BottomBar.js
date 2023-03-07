import { React, useState, useEffect }from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Container, Typography, Box, Toolbar, Button, Switch } from '@mui/material';

const pages = [
    {name: 'About', link: '/about', title: 'About', show: true},
    {name: 'Menu', link: '/menu', title: 'Menu', show: true},
    {name: 'Hours', link: '/hours', title: 'Hours', show: true},
    {name: 'Directions', link: '/directions', title: 'Directions', show: true},
    {name: 'Contact', link: '/contact', title: 'Contact', show: true},
]

const TopNavBar = (props) => {
    const { mode, toggle } = props;
    const [ pos, setPos ] = useState('static');
    const history = useHistory();

    useEffect(() => {
        function handleResize() {
            setPos(window.visualViewport.width < window.innerWidth ? 'static' : 'fixed');
        }
        window.addEventListener('resize', handleResize)
    })

    const clickHandler = (linkIn) => {
        history.push(linkIn);
    }

    return (
        <AppBar position={pos} color="primary" sx={{ top: 'auto', bottom: 0, mt: 3 }}>
            <Container maxWidth="xl" sx={{p: 1}}>
                <Toolbar disableGutters >
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.filter((page)=>(page.show===true)).map((page,i) => (
                        <Button key={i} onClick={(e) => clickHandler(page.link)} sx={{ my: 2, color: 'white', display: 'block' }}>
                            {page.name}
                        </Button>
                        ))}
                    </Box>
                    <Typography textAlign="center">Toggle Dark Mode: </Typography>
                    <Switch onChange={() => toggle(!mode)} />
                </Toolbar>
            </Container> 
        </AppBar>
    )
}

export default TopNavBar;