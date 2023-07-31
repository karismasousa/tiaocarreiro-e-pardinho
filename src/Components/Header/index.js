import React, { useState } from "react";
import "./header.css";
import logo from "../../images/logo.png";
import iconConfig from "../../images/configIcon.svg";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import Formlogin from "../FormLogin";

const Index = (props) => {
 const [showModal, setShowModal] = useState(false);
 const toggleModal = () => {
  setShowModal(!showModal);
 };
 const { title } = props;
  return (
  <header>
    <Link to="/">
     <img className="logo" src={logo} alt="Imagem do logo do site" />
    </Link>
     <h1>
     {title}{" "}
      <span className="tooltip" onClick={toggleModal}>
      <img className="configIcon" src={iconConfig} alt="Painel Admin" />
      <span class="tooltiptext">Acessar painel</span>
      </span>
     </h1>
   {showModal && (
    <Modal close={toggleModal}>
    <Formlogin close={toggleModal} />
    </Modal>
   )}
  </header>
  );
};

export default Index;
