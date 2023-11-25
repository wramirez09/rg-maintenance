'use client'
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import * as React from 'react';

import './appBar.scss';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

// const drawerWidth = 240;
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

  // const theme = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawerWidth = 240;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
      <Typography variant="h6" sx={{ my: 2 }} >
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
  const container = window !== undefined ? () => window().document.body : undefined;
  return (

    <Box sx={{ display: 'flex' }}>

      <CssBaseline />
      <AppBar component="nav" className='appBar'>
        <Container fixed>
          <Toolbar>
            <IconButton
              color="inherit"
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
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Link href="/" className='appBar__brand'>One Stop</Link>
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
      <nav>
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
      </nav>

    </Box >

  );
}
