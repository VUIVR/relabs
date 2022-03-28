import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from "react";
import { convertDate } from "../../Utils/convertTime";

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
    <Container sx={{ maxWidth: 500 }}>
      <Typography variant="h5" component="h5" sx={{ textAlign: "center" }}>
        События
      </Typography>
      <TableContainer component={Paper} >
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell align="center">Время</TableCell>
              <TableCell align="center">Событие</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {message.map((elem, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{convertDate(elem.ctime)}</TableCell>
                <TableCell align="center">{elem.event}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>    
    </Container>
  );
}

export default WebsocketList;
