import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

import { ROUTES_PATH } from '../../constants/routes';

const drawerWidth = 240;
const navItems = [ROUTES_PATH.about, ROUTES_PATH.contact];

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link component={RouterLink} to={ROUTES_PATH.root} underline="none">
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
      </Link>
      <Divider />
      <Box>
        {navItems.map((item) => (
          <Link
            key={item}
            component={RouterLink}
            to={item}
            sx={{
              textAlign: 'center',
              mt: '20px',
              textTransform: 'uppercase',
              display: 'block',
            }}
            underline="none"
          >
            <Typography variant="p" component="p">
              {item}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
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
          <Link
            component={RouterLink}
            to={ROUTES_PATH.root}
            sx={{ color: '#fff' }}
            underline="none"
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography>
          </Link>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexGrow: '1',
              justifyContent: 'flex-end',
            }}
          >
            {navItems.map((item) => (
              <Link
                component={RouterLink}
                to={item}
                key={item}
                sx={{ color: '#fff', ml: '20px', textTransform: 'uppercase' }}
                underline="none"
              >
                <Typography variant="p" component="span">
                  {item}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
