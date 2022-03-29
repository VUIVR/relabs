import { Box } from "@mui/material";
import React from "react";
import ListUsers from "../../Components/ListUsers/ListUsers";
import Websocket from "../../Components/Websocket/websocketList";

function Main() {
  return (
    <Box component="main">
      <ListUsers />
      <Websocket />      
    </Box>
  );
}

export default Main;
