import React from "react";
import ListUsers from "../../Components/ListUsers/ListUsers";
import Websocket from "../../Components/Websocket/websocketList";

import st from "./Main.module.css";

function Main() {
  return (
    <div className={st.main}>
      <ListUsers />
      <Websocket />      
    </div>
  );
}

export default Main;
