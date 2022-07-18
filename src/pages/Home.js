import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import CryptoAssetsList from "../components/CryptoAssetsList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <CryptoAssetsList />
      <Footer />
    </>
  );
};

export default Home;
