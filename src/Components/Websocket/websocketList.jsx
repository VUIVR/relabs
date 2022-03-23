import React, { useEffect, useState } from "react";
import { convertDate } from "../../Utils/convertTime";
import st from "./websocketList.module.css";

function WebsocketList() {
  const [message, setMessege] = useState([]);
  
  let socket = new WebSocket("wss://test.relabs.ru/event");
  
  useEffect(() => {
    socket.onopen = function () {
      console.log("Соединение установлено");
    };

    socket.onmessage = function (event) {
      setMessege((prev) => [...prev, JSON.parse(event.data)]);
    };
  }, []);


  useEffect(() => {
    socket.onclose = function (event) {
      console.log("Соединение закрыто");
    };

    socket.onerror = function (error) {
      console.log(`Содинение закрыто с ошибкой: ${error.message}`);
    };
  });

  useEffect(() => {
    socket.onmessage = function (event) {
      setMessege((prev) => [JSON.parse(event.data), ...prev]);
    };
  }, [message]);

  return (
    <div className={st.listEvents}>
      <h2>События</h2>
      <table>
        <thead className={st.thead}>
          <tr>
            <td>Номер</td>
            <td>Время</td>
            <td>Событие</td>
          </tr>
        </thead>
        <tbody>
          {message.map((elem, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
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
