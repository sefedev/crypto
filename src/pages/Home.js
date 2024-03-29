import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Footer from "../components/Footer";
import CryptoAssetList from "../components/CryptoAssetsList";
import useFetch from "../store/useFetch";

const Home = () => {
  const { data: cryptoAssets } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  return (
    <>
      <Header />
      <Search />
      <CryptoAssetList cryptoAssets={cryptoAssets} />
      <Footer />
    </>
  );
};

export default Home;
