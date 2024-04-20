import Videos from "../Pages/Videos";
import Navbar from "../components/Navbar";
import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen min-w-screen">
      <Navbar/>
      <Routes>
        <Route path='/videos' element={<Videos/>}/>
      </Routes>
    </div>
  );
}

export default App;
