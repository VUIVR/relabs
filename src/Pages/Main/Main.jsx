import React, { useState, useEffect } from "react";
import ListUsers from "../../Components/ListUsers/ListUsers";
import Websocket from "../../Components/Websocket/websocketList";
import { getPagesCount } from "../../Utils/pages";
import st from "./Main.module.css";

function Main() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState({
    pagesCount: 0,
    page: 0,
  });

  useEffect(() => {
    const url = new URL("https://test.relabs.ru/api/users/list");
    url.searchParams.set("offset", 0);

    async function getUsers() {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data.items);

      const count = getPagesCount(data.total, data.limit);
      setPage((prev) => ({ ...prev, pagesCount: count }));
    }
    getUsers();
  }, []);

  useEffect(() => {
    const newOffset = 0 + 5 * (page.page - 1);
    
    const url = new URL("https://test.relabs.ru/api/users/list");
    url.searchParams.set("offset", newOffset);

    async function getUsers() {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data.items);
    }
    getUsers();
  }, [page]);

  function deleteUser(id) {
    const del = users.filter((elem) => elem.id !== id);
    setUsers(del);
  }

  return (
    <div className={st.main}>
      <ListUsers
        users={users}
        deleteUser={deleteUser}
        page={page}
        setPage={setPage}
      />
     <Websocket/>
    </div>
  );
}

export default Main;
