import React from "react";

const CryptoAsset = ({ cryptoAsset }) => {
  return (
    <>
      <ul>
        <li>{cryptoAsset.name}</li>
        <li>{cryptoAsset.price_change_24h}</li>
      </ul>
    </>
  );
};

export default CryptoAsset;
