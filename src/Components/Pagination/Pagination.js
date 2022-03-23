 import React from 'react'
 import st from './Pagination.module.css'
 import {getPagesArray} from '../../Utils/pages'
 

function Pagination({page, setPage}) {
  let pagesArray = getPagesArray(page.pagesCount)  //массив из количества страниц
return (
  <div className={st.pagesWrapper}>
      {pagesArray.map(p =>
        <span
          onClick={() => setPage((prev) => ({...prev, page:p }))}
          key={p}
          className={p === page.page ? [st.pages, st.pageCurrent].join(' ') : st.pages}>
          {p}
        </span>)}
    </div>
)
}

export default Pagination 