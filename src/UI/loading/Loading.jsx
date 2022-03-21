import React from 'react'
import st from './Loading.module.css'

function loading() {
  return (
    <img className={st.rotation} src="./Images/Loading.png" alt="Loading" />
  )
}

export default loading