import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';

const Navbar = () => {
  const { access_token } = getToken()
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success">
        <Toolbar>
          <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}>I-Post</Typography>

          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#00425A' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

          <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#00425A' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contact</Button>

          {access_token ? <Button component={NavLink} to='/dashboard' style={({ isActive }) => { return { backgroundColor: isActive ? '#00425A' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Dashboard</Button> : <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#00425A' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button>}

        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
