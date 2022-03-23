import { getPagesCount } from "../Utils/pages";



export async function getUsersAndCount(urlFetch) {
    const response = await fetch(urlFetch);
    const data = await response.json();
    setUsers(data.items);

    const count = getPagesCount(data.total, data.limit);
    setPage((prev) => ({ ...prev, pagesCount: count }));
  }

export  async function getUsers(urlFetch) {
    const response = await fetch(urlFetch);
    const data = await response.json();
    setUsers(data.items);
  }