import React from "react";
import { convertDate } from "../../Utils/convertTime";
import Pagination from "../Pagination/Pagination";
import st from "./LiastUsers.module.css";

function ListUsers({ users, deleteUser, page, setPage }) {

  
  const list = users.map((user) => {
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
  });

  
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
        <tbody>{list}</tbody>
      </table>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default ListUsers;
