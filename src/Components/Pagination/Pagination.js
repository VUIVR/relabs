 import React from 'react'

function Pagination({totalPage, page, setPage}) {
  let pagesArray = getPagesArray(totalPages)  //массив из количества страниц
return (
  <div className={st.pagesWrapper}>
      {pagesArray.map(p =>
        <span
          onClick={() => changePage(p)}
          key={p}
          className={p === page ? [st.pages, st.pageCurrent].join(' ') : st.pages}>
          {p}
        </span>)}
    </div>
)
}

export default Pagination 