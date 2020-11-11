import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

function Navigation() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Button
          color="inherit"
          component={NavLink}
          to="/"
          className={classes.title}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/products"
          className={classes.title}
        >
          Products
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/products"
          className={classes.title}
        >
          Orders
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/products"
          className={classes.title}
        >
          Users
        </Button>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default Navigation;
