import React, { Children } from "react";
import st from "./Modal.module.css";

function Modal({children}) {
  return (
    <div className={st.backround}>
      <div className='container'>{children}</div>
    </div>
  );
}

export default Modal;
