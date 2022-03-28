import React, { useState, useEffect } from "react";
import { convertDate } from "../../Utils/convertTime";
import st from "./websocketList.module.css";

function WebsocketList() {
  const [message, setMessege] = useState([]);

  useEffect(() => {
    let socket = new WebSocket("wss://test.relabs.ru/event");
    socket.onopen = () => {
      console.log("Соединение Открыто");
    };
    socket.onclose = () => {
      console.log("Соединение закрыто");
    };

    socket.onmessage = (event) => {
      setMessege((prev) => [JSON.parse(event.data), ...prev.slice(0, 9)]);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="container">
      <h2>События</h2>
      <table>
        <thead className={st.thead}>
          <tr>
            <td>Время</td>
            <td>Событие</td>
          </tr>
        </thead>
        <tbody>
          {message.map((elem, index) => {
            return (
              <tr key={index}>
                <td>{convertDate(elem.ctime)}</td>
                <td>{elem.event}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default WebsocketList;
