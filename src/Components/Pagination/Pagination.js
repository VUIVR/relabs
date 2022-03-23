 import React from 'react'
 import st from './Pagination.module.css'
 import {getPagesArray} from '../../Utils/pages'
 

function Pagination({page, setPage}) {
  let pagesArray = getPagesArray(page.pagesCount)  //формирует массив из количества страниц
return (
  <div className={st.pagesWrapper}>
      {pagesArray.map(elem =>
        <span
          onClick={() => setPage((prev) => ({...prev, page:elem }))}
          key={elem}
          className={elem === page.page ? [st.pages, st.pageCurrent].join(' ') : st.pages}>
          {elem}
        </span>)}
    </div>
)
}

export default Pagination 