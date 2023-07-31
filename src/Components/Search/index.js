import React, { useState } from "react";
import "./search.css";
import { toast } from "react-toastify";

function Index(props) {
 const { onSubmit } = props;
 const [search, setSearch] = useState("");
 const handleSubmit = (e) => {
  e.preventDefault();
   if (search === "") {
    toast.warning("Digite uma palavra chave");
  return;
  }
   onSubmit(search);
};

const handleChange = (e) => {
  const searchText = e.target.value;
  if (searchText === "") {
    onSubmit(searchText);
  }

    setSearch(searchText);
  };

  return (
   <form onSubmit={handleSubmit}>
    <label>
      Digite uma palavra chave <br />{" "}
     <input type="text" value={search} onChange={handleChange} required />
    </label>

   <button>Procurar</button>
   </form>
 );
}

export default Index;
