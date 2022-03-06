import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import theme from "./Theme";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.Toolbar//here we are coping al what theme object toolbar have
  }
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    
    
      <ElevationScroll>
        <AppBar >
          <Toolbar position="fixed
          ">
            <Typography variant="h3" color="secondary">
              Arc Development
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    
      
    
 
  );
};

export default Header;
