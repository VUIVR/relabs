import React, { useState, useEffect } from "react";
import ListUsers from "../../Components/ListUsers/ListUsers";
import st from "./Main.module.css";

function Main() {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState({
    limit: 5,
    offset: 0,
  });
  const [page, setPage] = useState({
    totalPage:0,
    page:0
  });

  useEffect(() => {
    const url = new URL("https://test.relabs.ru/api/users/list");
    url.searchParams.set("limit", searchParams.limit);
    url.searchParams.set("offset", searchParams.offset);

    async function getUsers() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPage((prev)=>({...prev, totalPage:data.total}))
      setUsers(data.items);
    }
    getUsers();
  }, []);

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
    </div>
  );
}

export default Main;
