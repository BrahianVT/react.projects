import React from "react";
import {AppBar, Toolbar, IconButton, Typography, Box, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const styles = {
    flexGrow: 1
};

function NavBar(){
    return (
        <Box sx={{ ...styles }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton size="large" edge="start" color="inherit" aria-label="menu"
                sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ ...styles  }}>
                Axie Prime
              </Typography>
              <Button color="inherit" >About</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default NavBar; 