import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const styles = {
  flexGrow: 1,
  color: 'white',
};

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: 22,
    "&:hover": {
      borderBottom: "1px solid white",
    }
  }  
});


function NavBar() {
  const classes = useStyles();

  return (
    <Box sx={{ ...styles }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.link}>
            <Typography variant="h6" component="div" sx={{ ...styles }}>
              Axie Prime
            </Typography>
          </Link>

          <Link to="/about"   style={{position: 'absolute',right: 5 }} className={classes.link}>
            <Typography variant="h6" component="div" sx={{ ...styles}}>
              About
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;