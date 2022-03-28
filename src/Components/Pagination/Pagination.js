import { Pagination, Stack } from '@mui/material'
import React from 'react'



function PaginationList({ page, setPage }) {

  return (
    <Stack spacing={2} >
      <Pagination
        count={page.pagesCount}
        variant="outlined"
        shape="rounded"        
        hidePrevButton
        hideNextButton
        /* page={page} */
        onChange={(_, num) => {
          setPage((prev) => ({ ...prev, page: num }))
        }}
      />
    </Stack>
  )
}

export default PaginationList 