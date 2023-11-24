'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, useTheme } from '@mui/material';
import Link from 'next/link';

import './appBar.scss'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navLinks = [{
  title: "Home",
  link: "/"
}, {
  title: "about",
  link: "/about"
}, {
  title: "contact",
  link: "/contact"
}];

export default function DrawerAppBar(props: Props) {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link href="/">One Stop Shop</Link>
      </Typography>
      <Divider />
      <List>
        {navLinks.map((link, index) => (
          <ListItem key={`${link.title}-${index}`} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={link.link}><ListItemText primary={link.title} /></Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (

    <Box sx={{ display: 'flex' }}>

      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "rgba(0, 0, 0, .235)" }}>
        <Container fixed>
          <Toolbar>
            <IconButton
              // color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              // style={{color: theme.palette.primary.main }}
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Link href="/" style={{ textDecoration: 'none' }}>One Stop Shop</Link>
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navLinks.map((link, index) => (
                <Link href={link.link} key={`${link.title}-${index}`} style={{ margin: '5px' }}>
                  {link.title}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

    </Box>

  );
}
