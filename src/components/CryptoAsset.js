import React from "react";

const CryptoAsset = ({ cryptoAsset }) => {
  return (
    <>
      <ul>
        <li>
          <span>
            <img
              src={cryptoAsset.img}
              alt={cryptoAsset.symbol}
              width="100%"
              height="100"
            />
          </span>
          <span>{cryptoAsset.name}</span>
          <span>${cryptoAsset.current_price}</span>
          <span>${cryptoAsset.market_cap}</span>
        </li>
      </ul>
    </>
  );
};

export default CryptoAsset;
