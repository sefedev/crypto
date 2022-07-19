import React, { useState } from "react";
import useFetch from "./useFetch";
import CryptoAsset from "./CryptoAsset";

const CrytoAssetsLists = () => {
  const { data: cryptoAssets } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  console.log(cryptoAssets);

  // const list = [
  //   { id: 1, name: "sukanmi" },
  //   { id: 2, name: "omosefe" },
  //   { id: 3, name: "Temitope" }
  // ];

  return (
    <>
      {cryptoAssets &&
        cryptoAssets.map((cryptoAsset) => {
          return <CryptoAsset key={cryptoAsset.id} cryptoAsset={cryptoAsset} />;
        })}
    </>
  );
};

export default CrytoAssetsLists;
