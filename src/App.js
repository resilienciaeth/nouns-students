import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Web3ForNewbies from "./Components/web3";
import Snake from "./Components/nounssnake";
import NounsForNewbies from "./Components/nouns";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/web3" element={<Web3ForNewbies />} />
        <Route path="/nouns" element={<NounsForNewbies />} />
        <Route path="/nounssnake" element={<Snake />} />
        {/* Add more routes here if needed */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
