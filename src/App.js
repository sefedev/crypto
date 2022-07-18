import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CryptoAssetsList from "./components/CryptoAssetsList";

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <CryptoAssetsList />
    </div>
  );
};

export default App;