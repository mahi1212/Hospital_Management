import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import { FaMandalorian, FaRunning, FaUserNurse } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { TbBed } from "react-icons/tb";
import { FcHome } from "react-icons/fc";
import ListIcon from '@mui/icons-material/List';
import { Outlet } from "react-router-dom";
import {Container } from '@mui/material';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function NewHeader() {
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex', background:'#F6F6F6'}} >
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar style={{background:'#fff', color:'#000'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6"
                        fontFamily={'Roboto'}
                        noWrap component='div' sx={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
                        Hospital Management System
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                // variant="temporary"
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Toolbar style={{ color: '#000' }}>
                        <Typography variant="h6" noWrap> SmartCare </Typography>
                        <FaMandalorian style={{ fontSize: '1.5rem', marginLeft: '20px' }} />
                    </Toolbar>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {/* Links for routing */}
                <List>
                    <NavLink to="/" style={{ textDecoration: 'none', width: '100%', color: '#000' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>

                                    {/* <HomeIcon style={{ color: '#000', fontSize: '1.5rem' }} /> */}

                                    <FcHome style={{ color: '#000', fontSize: '1.5rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="Overview" />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                   {/* Doctors Section*/}
                    <NavLink to="/doctors" style={{ textDecoration: 'none', width: '100%', color: '#000' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>

                                    {/* <MedicationIcon style={{ color: '#000', fontSize: '1.5rem' }} /> */}

                                    <FaUserNurse style={{ color: '#000', fontSize: '1.5rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="Doctors" />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                     {/* Patients Section*/}
                    <NavLink to="/patients" style={{ textDecoration: 'none', width: '100%', color: '#000' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TbBed style={{ color: '#000', fontSize: '1.5rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="Patients" />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                    {/* appointment Section*/}
                    <NavLink to="/Addappointment" style={{ textDecoration: 'none', width: '100%', color: '#000' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AiOutlineFieldTime style={{ color: '#000', fontSize: '1.5rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="AddAppointment" />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/appointment" style={{ textDecoration: 'none', width: '100%', color: '#000' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ListIcon style={{ color: '#000', fontSize: '1.5rem' }}/>
                                </ListItemIcon>
                                <ListItemText primary="AppointmentList" />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                   {/* Staff section */}
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
                    <NavLink to="/dept" style={{ textDecoration: 'none', width: '100%', color: '#000' }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FaRunning style={{ color: '#000', fontSize: '1.5rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="dept" />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Container>
                    <Outlet />

                </Container>
            </Main>
        </Box>
    );
}
