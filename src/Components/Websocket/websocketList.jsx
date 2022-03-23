import React, { useEffect, useState } from "react";

function WebsocketList() {
  const [message, setMessege] = useState([]);

  let socket = new WebSocket("wss://test.relabs.ru/event");

  useEffect(() => {
    socket.onopen = function () {
      console.log("Соединение установлено");
    };

    socket.onmessage = function (event) {
     if (message.length < 10)
        { setMessege((prev) => [JSON.parse(event.data), ...prev])}
        else { let shotMess = message.splice(-9)
          setMessege(() => [JSON.parse(event.data), shotMess]);}
    };

    socket.onclose = function (event) {
      if (event.wasClean) {
        console.log(
          `Соединение закрыто, ${event.code} причина=${event.reason}`
        );
      } else {
        console.log("Соединение прервано");
      }
    };

    socket.onerror = function (error) {
      console.log(`Содинение закрыто с ошибкой: ${error.message}`);
    };
  });

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Время</td>
            <td></td>
          </tr>
          {message.map((elem, index) => {
            console.log(elem.ctime);
            return (
              <tr key={elem.ctime}>
                <td>{index}</td>
                <td>{elem.ctime}</td>
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
