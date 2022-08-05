import React, { useState, useEffect } from "react";
import CryptoAsset from "./CryptoAsset";
import ReactPaginate from "react-paginate";

const CryptoAssetList = ({ cryptoAssets }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(cryptoAssets.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(cryptoAssets.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, cryptoAssets]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cryptoAssets.length;
    setItemOffset(newOffset);
  };

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
      {currentItems &&
        currentItems.map((cryptoAsset) => {
          return <CryptoAsset key={cryptoAsset.id} cryptoAsset={cryptoAsset} />;
        })}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
};

export default CryptoAssetList;
