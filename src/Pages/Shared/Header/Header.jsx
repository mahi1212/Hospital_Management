import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import MedicationIcon from '@mui/icons-material/Medication';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HotelIcon from '@mui/icons-material/Hotel';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { FaEdit, FaMandalorian, FaRunning } from "react-icons/fa";
import { Alert } from '@mui/material';


const drawerWidth = 210;

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box >
            <Toolbar style={{ backgroundColor: '#11468F', color: '#fff' }}>
                <Typography variant="h6" noWrap> SmartCare </Typography>
                <FaMandalorian style={{ fontSize: '1.5rem', marginLeft: '20px' }} />
            </Toolbar>
            <Divider />
            <List>
                <NavLink to="/home" style={{ textDecoration: 'none', width: '100%', color: '#000' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon style={{ color: '#000', fontSize: '1.5rem' }} />
                            </ListItemIcon>
                            <ListItemText primary="Overview" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                {/* <Divider /> */}
                <NavLink to="/doctors" style={{ textDecoration: 'none', width: '100%', color: '#000' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MedicationIcon style={{ color: '#000', fontSize: '1.5rem' }} />
                            </ListItemIcon>
                            <ListItemText primary="Doctors" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>

                {/* <Divider /> */}
                <NavLink to="/patients" style={{ textDecoration: 'none', width: '100%', color: '#000' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HotelIcon style={{ color: '#000', fontSize: '1.5rem' }} />
                            </ListItemIcon>
                            <ListItemText primary="Patients" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                {/* <Divider /> */}
                <NavLink to="/Staffs" style={{ textDecoration: 'none', width: '100%', color: '#000' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FaRunning style={{ color: '#000', fontSize: '1.5rem' }} />
                            </ListItemIcon>
                            <ListItemText primary="Staffs" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                 {/* <Divider /> */}
                <NavLink to="/appointment" style={{ textDecoration: 'none', width: '100%', color: '#000' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                            <FaEdit style={{ color: '#000', fontSize: '1.5rem' }} />

                            </ListItemIcon>
                            <ListItemText primary="appointment" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            </List>
            <Divider />
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#fff',
                    
                }}
            >
                <IconButton
                    // color="inherit"
                    style={{ color: '#000', width: '100%' }}
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'flex', md: 'none' }, justifyContent: 'flex-start' }}
                >
                    <MenuIcon style={{ marginLeft: '1rem' }} />
                    <Typography variant="h6"
                        fontFamily={'Roboto'}
                        noWrap component='div' sx={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
                        Hospital Management System
                    </Typography>
                </IconButton>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth})` } }}
            >
                {/* <Toolbar /> */}
                <Alert severity="info"
                sx={{marginTop:{xs :'3rem', sm:'3rem',md:'0'}, display:'flex', justifyContent:'center'}}>Welcome — Mahinur Rahman!</Alert>
            </Box>
        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;
