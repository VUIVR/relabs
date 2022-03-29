import { AppBar, Box, Button, Container, } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="fixed" component="nav">
      <Container fixed>
        <Box >
          <Button variant="outlined" href="/">
            <Link to="/">Главная</Link>
          </Button >
          <Button variant="outlined">
            <Link to="/login">Логин</Link>
          </Button>
          <Button variant="outlined">
            <Link to="/shop">Магазин</Link>
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navbar;
