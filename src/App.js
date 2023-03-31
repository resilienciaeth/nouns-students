import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Web3ForNewbies from "./Components/web3";
import Sneak from "./Components/NounsSneak";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/web3" element={<Web3ForNewbies />} />
        <Route path="/nounssneak" element={<Sneak />} />
        {/* Add more routes here if needed */}
      </Routes>
    </>
  );
};

export default App;
