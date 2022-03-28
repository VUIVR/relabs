import React from "react";
import ListUsers from "../../Components/ListUsers/ListUsers";
import Websocket from "../../Components/Websocket/websocketList";

function Main() {
  return (
    <div>
      <ListUsers />
      <Websocket />      
    </div>
  );
}

export default Main;
