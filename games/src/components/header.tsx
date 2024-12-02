import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar className="header">
        <IconButton edge="start" color="inherit" aria-label="logo" size="large" component={Link} to="/">
          <FontAwesomeIcon icon={faGamepad} className="icon" />
        </IconButton>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          DYLANS GAMES
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          style={{ fontSize: "larger", padding: "10px 20px" }}
        >
          <FontAwesomeIcon
            icon={faHome}
            className="icon"
            style={{ marginRight: "10px" }}
          />
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/games"
          style={{ fontSize: "larger", padding: "10px 20px" }}
        >
          <FontAwesomeIcon
            icon={faGamepad}
            className="icon"
            style={{ marginRight: "10px" }}
          />
          Games
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
