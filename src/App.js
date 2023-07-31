import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import PageNotFound from "./Pages/PageNotFound";


function App() {
  const [title, setTitle] = useState("");

  return (
  <>
   <BrowserRouter>
   <ToastContainer autoClose={2000} />
  <div className="container">
    <Header title={title} />
  <div className="content">
   <Routes>
   <Route path="/" element={<Home setTitle={setTitle} />} />
   <Route path="/admin" element={<Admin setTitle={setTitle} />} />
   <Route path="*" element={<PageNotFound />} />
   </Routes>
  </div>
  </div>
  <footer>
  <br/>
  </footer>
  </BrowserRouter>
 </>
 );
}

export default App;
