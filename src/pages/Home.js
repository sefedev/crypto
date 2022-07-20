import React, { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import CryptoAssetsList from "../components/CryptoAssetsList";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import useFetch from "../components/useFetch";

const Home = () => {
  const { data: cryptoAssets } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  return (
    <>
      <Header />
      <Search />
      <Pagination cryptoAssets={cryptoAssets} />
      <Footer />
    </>
  );
};

export default Home;
