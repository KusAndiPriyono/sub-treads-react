/* eslint-disable prettier/prettier */
/* eslint-disable react/require-default-props */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Create, Groups, Leaderboard, Logout } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

const drawerWidth = 240;

function Navigation({ signOut, window, authUser }) {
  const { id, avatar, name } = authUser;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <img
          src={avatar}
          alt={id}
          title={name}
          width={40}
          height={40}
          style={{ borderRadius: '50%' }}
        />
        <Typography sx={{ ml: 2 }}>Welcome, {name}</Typography>
      </Toolbar>
      <Divider />
      <List>
        <Link to='/create'>
          <Tooltip title='Create Thread' placement='right'>
            <Button type='button' sx={{ ml: 2 }}>
              <Create />
              <Typography sx={{ ml: 2 }}> Create</Typography>
            </Button>
          </Tooltip>
        </Link>
        <Divider />

        <Link to='/'>
          <Tooltip title='Home' placement='right'>
            <Button type='button' sx={{ ml: 2 }}>
              <Groups />
              <Typography sx={{ ml: 2 }}>Threads</Typography>
            </Button>
          </Tooltip>
        </Link>
        <Divider />

        <Link to='/leaderboards'>
          <Tooltip title='Leaderboards' placement='right'>
            <Button type='button' sx={{ ml: 2 }}>
              <Leaderboard />
              <Typography sx={{ ml: 2 }}>Leaderboards</Typography>
            </Button>
          </Tooltip>
        </Link>
        <Divider />

        <Tooltip title='Sign Out' placement='right'>
          <Button type='button' onClick={signOut} sx={{ ml: 2 }}>
            <Logout />
            <Typography sx={{ ml: 2 }}>Sign Out</Typography>
          </Button>
        </Tooltip>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Forum Diskusi
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main'>
        <Toolbar />
      </Box>
    </Box>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
  window: PropTypes.func,
};

export default Navigation;
