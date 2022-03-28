import React, { useState, useEffect } from "react";
import { convertDate } from "../../Utils/convertTime";
import { getPagesCount } from "../../Utils/pages";
import Pagination from "../Pagination/Pagination";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import {
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState({
    pagesCount: 1,
    page: 1,
  });

  useEffect(() => {
    const url = new URL("https://test.relabs.ru/api/users/list");
    url.searchParams.set("offset", 0);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.items);
        setPage((prev) => ({
          ...prev,
          pagesCount: getPagesCount(data.total, data.limit),
        }));
      });
  }, []);

  useEffect(() => {
    const newOffset = 0 + 5 * (page.page - 1);

    const url = new URL("https://test.relabs.ru/api/users/list");
    url.searchParams.set("offset", newOffset);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data.items));
  }, [page]);

  function deleteUser(id) {
    const del = users.filter((elem) => elem.id !== id);
    setUsers(del);
  }

  return (
    <Container sx={{ maxWidth: 600 }}>
      <Typography variant="h5" component="h5" sx={{ textAlign: "center" }}>
        Список пользователей
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Имя</TableCell>
              <TableCell align="center">Роль</TableCell>
              <TableCell align="center">Дата </TableCell>
              <TableCell align="center">Действие</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              return (
                <TableRow
                  key={user.ctime}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{user.id}</TableCell>
                  <TableCell align="center">{user.name}</TableCell>
                  <TableCell align="center">{user.role}</TableCell>
                  <TableCell align="center">{convertDate(user.ctime)} </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Delete" align="center">
                      <IconButton>
                        <DeleteIcon
                          fontSize='small'
                          onClick={() => deleteUser(user.id)}
                        />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination page={page} setPage={setPage} />
    </Container>
  );
}

export default React.memo(ListUsers);
