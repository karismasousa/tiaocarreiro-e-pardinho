import { useEffect, useState } from "react";
import fetchApi from "../Services/fetchApi";
import AlbunsList from "../Components/AlbunsList";
import Search from "../Components/Search";

function Home(props) {
 const [albuns, setAlbuns] = useState([]);
 const { setTitle } = props;

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

  useEffect(() => {
   setTitle("Discografia");
   searchAlbum();
  }, []);

  const handleSubmit = (searchText) => {
    searchAlbum(searchText);
  };

  return (
   <>
    <Search onSubmit={handleSubmit} />
    <div className="contentSearch">
    <AlbunsList albuns={albuns} />
    </div>
    </>
  );
}

export default Home;
