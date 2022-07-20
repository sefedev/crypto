import React from "react";
import useFetch from "./useFetch";
import CryptoAsset from "./CryptoAsset";

const CrytoAssetsLists = ({ currentItems }) => {
  const { data: cryptoAssets } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  console.log(cryptoAssets);

  // const list = [
  //   { id: 1, name: "sukanmi" },
  //   { id: 2, name: "omosefe" },
  //   { id: 3, name: "Temitope" }
  // ];

  //   - Crypto Assets
  // - Price
  // - 24H change
  // - MarketCap

  return (
    <>
      <header>
        <span>
          <h4>Crypto Assets</h4>
        </span>
        <span>
          <h4>Price</h4>
        </span>
        <span>
          <h4>24H change</h4>
        </span>
        <span>
          <h4>MarketCap</h4>
        </span>
      </header>
      {cryptoAssets &&
        cryptoAssets.map((cryptoAsset) => {
          return (
            <CryptoAsset
              key={cryptoAsset.id}
              cryptoAsset={cryptoAsset}
              currentItems={currentItems}
            />
          );
        })}
    </>
  );
};

export default CrytoAssetsLists;
