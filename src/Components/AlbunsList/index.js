import React, { useState } from "react";
import "./albunList.css";
import Modal from "../Modal";
import TracksCreate from "../TracksCreate";

const AlbunsList = (props) => {
  const { albuns, isAdmin, deleteAlbum, deleteTrack, searchAlbum } = props;
  const [showModal, setShowModal] = useState(false);
  const [selectAlbum, setSelectAlbum] = useState({});

  const formatDuration = (duration) => {
    if (!duration) return "--:--";

    let minuts = parseInt(duration / 60);
    let seconds = duration % 60;
    if (seconds < 10) {
      seconds = "0" + seconds.toString();
    }
    return `${minuts}:${seconds}`;
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    if (showModal) {
      searchAlbum();
    }
  };

  const handleAddTrack = (item) => {
    setSelectAlbum(item);
    toggleModal();
  };

  return (
  <>
   <div>
    {albuns && albuns.map((item) => {
 return (
   <div key={item?.id}>
    <h3>
     Álbum: {item?.name}, {item?.year}
    {isAdmin && (
   <div className="btnList">
    <button onClick={() => deleteAlbum(item.id)}>Excluir Album</button>
    <button onClick={() => handleAddTrack(item)}>Adicionar Faixa</button>
    </div>
  )}
   </h3>
   <table>
    <thead>
     <tr>
      <th><strong>Nº</strong></th>
      <th><strong>Faixa</strong></th>
      <th><strong>Duração</strong></th>
     </tr>
   </thead>
  <tbody>
   {item?.tracks.length ? (item?.tracks.map((track) => {
    return (
    <tr key={track?.id}>
      <td>{track?.number}</td>
      <td>{track?.title}</td>
      <td>{formatDuration(track?.duration)}</td>
    {isAdmin && (
      <td className="btnList">
      <button onClick={() => deleteTrack(track.id)}>Excluir Faixa</button>
      </td>
    )}
   </tr>
    );
  })
  ) : (
   <tr>
    <td>#</td>
    <td>Este album não tem faixa</td>
    <td>#</td>
   </tr>
  )}
  </tbody>
   </table>
<br/>
  </div>
   );
    })}
  </div>
   {showModal && (
    <Modal close={toggleModal}>
   <TracksCreate album={selectAlbum} close={toggleModal} />
    </Modal>
   )}
</>
);
};

export default AlbunsList;
