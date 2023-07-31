import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Formlogin(props) {
  const [userName, setUserName] = useState("Admin");
  const [userPassword, setUserPassword] = useState("admin");
  const navigate = useNavigate();
  const { close } = props;
  const handleSubmit = (e) => {
    e.preventDefault();

  if ("Admin" == userName && "admin" == userPassword) {
   navigate("/admin");
   close();
 } else {
   toast.warn("Login ou Senha incorreto");
    }
  };

  return (
  <>
   <form className="formLogin" onSubmit={handleSubmit}>
     <label>Login</label>
     <input
       type="text"
       value={userName}
       onChange={(e) => setUserName(e.target.value)}
       required
     />
     <label>Senha</label>
      <input
       type="password"
       value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        required
      />
    <button>Entrar</button>
   </form>
 </>
);
}

export default Formlogin;
