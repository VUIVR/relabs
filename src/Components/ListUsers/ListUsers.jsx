import React, { useState, useEffect } from "react";
import { convertDate } from "../../Utils/convertTime";
import { getPagesCount } from "../../Utils/pages";
import Pagination from "../Pagination/Pagination";
import st from "./LiastUsers.module.css";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState({
    pagesCount: 0,
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
    <div className={st.listUsers}>
      <h2>Список пользователей</h2>
      <table>
        <thead className={st.thead}>
          <tr>
            <td>ID</td>
            <td>Имя</td>
            <td>Роль</td>
            <td>Дата </td>
            <td>Действие</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.ctime} className={st.user}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{convertDate(user.ctime)} </td>
                <td>
                  <button type="button" onClick={() => deleteUser(user.id)}>
                    Удалить
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default ListUsers;
