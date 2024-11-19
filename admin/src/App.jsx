import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



 export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(() => {
    localStorage.setItem('token', token)
  },[token])

  return (
    <div className=" min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken = {setToken} />
      ) : (
        <>
          <Navbar  setToken = {setToken}/>
          <hr className="h-1" />
          <div className="w-full flex">
          <SideBar />
            <div className="w-[78%] my-5 ml-10">
              <Routes>
                <Route path="/add" element={<Add token = {token} />} />
                <Route path="/list" element={<List token = {token} />} />
                <Route path="/orders" element={<Orders token = {token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
