import React from "react";
import "./modal.css";

const Modal = ({ close, children }) => {
 return (
 <div className="modal">
  <div className="container">
    <button className="close" onClick={close}>Voltar</button>
     <main>{children}</main>
  </div>
 </div>
 );
};

export default Modal;
