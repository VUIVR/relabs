import React, { useState, useEffect } from "react";
import ListUsers from "../../Components/ListUsers/ListUsers";
import Websocket from "../../Components/Websocket/websocketList";
import { getPagesCount } from "../../Utils/pages";
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
