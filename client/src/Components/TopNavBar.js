import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { AppBar, Container, Link, Typography, Box, IconButton, Toolbar, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

const pages = [
    {name: 'About', link: '/about', title: 'About', show: true},
    {name: 'Menu', link: '/menu', title: 'Menu', show: true},
    {name: 'Hours', link: '/hours', title: 'Hours', show: true},
    {name: 'Directions', link: '/directions', title: 'Directions', show: true},
    {name: 'Contact', link: '/contact', title: 'Contact', show: true},
]

const TopNavBar = (props) => {
    const { title } = props;
    const history = useHistory();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    }

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
    }

    const clickHandler = (linkIn) => {
        history.push(linkIn);
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{p: 1}}>
                <Toolbar disableGutters >
                    <Typography
                        href="/"
                        color="inherit"
                        noWrap 
                        variant="h5" 
                        component="a" 
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}, textDecoration: 'none'}}
                    >
                        {title}
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                            keepMounted
                            transformOrigin={{vertical: 'top',horizontal: 'left',}}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{display: { xs: 'block', md: 'none' }}}
                        >
                            {pages.filter((page)=>(page.show===true))
                            .map((page,i) => (
                                <MenuItem key={i} onClick={(e) => clickHandler(page.link)}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Link
                        href="/"
                        color="inherit"
                        underline="hover" 
                        variant="h6"
                        noWrap 
                        component="div" 
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}
                    >
                        {title}
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.filter((page)=>(page.show===true)).map((page,i) => (
                        <Button key={i} onClick={(e) => clickHandler(page.link)} sx={{ my: 2, color: 'white', display: 'block' }}>
                            {page.name}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
                
            </Container>
        </AppBar>
    )
}

export default TopNavBar;