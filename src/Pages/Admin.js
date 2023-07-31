import { useEffect, useState } from "react";
import fetchApi from "../Services/fetchApi";
import AlbunsList from "../Components/AlbunsList";
import AlbunsCreate from "../Components/AlbunsCreate";
import Search from "../Components/Search";
import "./admin.css";
import Modal from "../Components/Modal";
import { toast } from "react-toastify";

function Admin(props) {
 const { setTitle } = props;
 const [albuns, setAlbuns] = useState([]);
 const [showModal, setShowModal] = useState(false);
 const searchAlbum = (params = "") => {
  let pathUrl = "api/album?limit=10&page=1";
  const method = "GET";
   if (params) {
    pathUrl += `&keyword=${params}`;
  }

  fetchApi(pathUrl, method).then((res) => {
   if (res.status) {
    setAlbuns(res.data?.data);
  }
  });
  };

 const DeleteAlbum = (albumId) => {
   let pathUrl = `api/album/${albumId}`;
   const method = "DELETE";

  fetchApi(pathUrl, method).then((res) => {
    if (res.status) {
    toast.success("Album deletado com sucesso!");
    searchAlbum();
    }
  });
  };

  const DeleteTrack = (trackId) => {
   let pathUrl = `api/track/${trackId}`;
   const method = "DELETE";

   fetchApi(pathUrl, method).then((res) => {
    if (res.status) {
    toast.success("Faixa deletada com sucesso!");
    searchAlbum();
    }
   });
  };

  useEffect(() => {
   setTitle("Painel Admin");
   searchAlbum();
  }, []);

  const handleSubmit = (searchText) => {
    searchAlbum(searchText);
  };

  const handleDeleteAlbum = (albumId) => {
    if (window.confirm("Você tem certeza que deseja deletar esse album")) {
    DeleteAlbum(albumId);
    }
  };

  const handleDeleteTrack = (trackId) => {
    if (window.confirm("Você tem certeza que deseja deletar essa faixa")) {
     DeleteTrack(trackId);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    if (showModal) {
    searchAlbum();
    }
  };

  return (
   <>
    <div className="newSearch">
     <div>
      <Search onSubmit={handleSubmit} />
     </div>
    <div>
     <button onClick={toggleModal}>Adicionar Album</button>
   </div>
    </div>
    <div className="contentSearch">
     <AlbunsList
      albuns={albuns}
      isAdmin={true}
      deleteTrack={handleDeleteTrack}
      deleteAlbum={handleDeleteAlbum}
      searchAlbum={searchAlbum}
      />
   </div>
   {showModal && (
     <Modal close={toggleModal}>
     <AlbunsCreate albuns={albuns} close={toggleModal} />
     </Modal>
      )}
   </>
  );
}

export default Admin;
