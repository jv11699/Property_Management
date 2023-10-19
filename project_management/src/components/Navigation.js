import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navigation = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logging out...');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
        <Typography variant="h6" noWrap>
          Menu
        </Typography>
      </IconButton>
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        <List>
          <ListItem button onClick={handleDrawerClose} component={Link} to="/">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Renters" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose} component={Link} to="/lease-agreement">
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Lease Agreement Template" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose} component={Link} to="/financial-dashboard">
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Financial Dashboard" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose} component={Link} to="/profile">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
        <Box mt={2}>
          <Button variant="outlined" color="primary" onClick={handleLogout} fullWidth>
            <ExitToAppIcon sx={{ mr: 1 }} />
            Logout
          </Button>
        </Box>
      </Drawer>
      {/* Main content area */}
      <Box sx={{ ml: 3 }}>
        {/* Add your main content here */}
      </Box>
    </Box>
  );
};

export default Navigation;
