import React from "react";
import fetchApi from "../../Services/fetchApi";
import "../AlbunsCreate/albunsCreate.css";
import { toast } from "react-toastify";

function Index(props) {
  const { name, id, year, tracks } = props.album;

 const handleSubmit = (e) => {
  e.preventDefault();
  const album_id = e.target.album_id.value;
  const number = e.target.number.value;
  const title = e.target.title.value;
  const duration = e.target.duration.value;
  const newTrack = {
    album_id,
    number,
    title,
    duration,
  };
   if (validateForm(newTrack)) {
      CreateTrack(newTrack);
   }
  };

 const validateForm = (newTrack) => {
  let menssage = "";
   tracks.map((item) => {
    if (newTrack.number == item.number) {
     menssage = "O numero da faixa já esta em uso.";
    }
    if (newTrack.title === item.title) {
     menssage = "O nome da faixa já esta em uso.";
    }
   });
   if (menssage) {
    toast.warning(menssage);
    return false;
   }
   return true;
  };

 const CreateTrack = (body) => {
  let pathUrl = `api/track`;
  const method = "POST";

  fetchApi(pathUrl, method, body).then((res) => {
    if (res.status) {
    toast.success("Faixa cadastrada com sucesso");
    }
  });
  };

  return (
   <>
    <strong>
     Faixa: {name}, {year}
    </strong>
     <form onSubmit={handleSubmit} className="formAddAlbum">
    <input type="hidden" value={id} name="album_id" />
      <label>Numero da faixa</label>
      <input type="number" name="number" required />
      <br />
      <label>Nome da Musica</label>
      <input type="text" name="title" required />
      <br />
      <label>Duração da Faixa</label>
      <input type="number" name="duration" required />
      <br />
      <input type="submit" value="Criar" />
     </form>
   </>
);
}

export default Index;
