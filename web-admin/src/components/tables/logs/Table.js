import React, { useState, useMemo } from "react";
import PaginationComponent from "../../pagination";
import { requestlogsColumn } from "../columns/logsColumn";
import RenderTable from "./RenderTable";

const Table = ({ data, status, totalResults }) => {
  const headers = useMemo(() => requestlogsColumn, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [pageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const pages = [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    status === "success" ? data.slice(indexOfFirstItem, indexOfLastItem) : null;

  // CALCULATING PAGES
  if (status === "success") {
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pages.push(i);
    }
  }
  //HANDLE CLICK
  const handleCLick = (e) => {
    setCurrentPage(Number(e.target.id));
  };
  // RENDER PAGE NUMBERS
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleCLick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  //BUTTON NEXT
  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  //BUTTON PREV
  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  //INCREMENT BUTTONS
  let pageIncrementButton = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementButton = <li onClick={handleNextButton}> &hellip; </li>;
  }
  //DECREMENT BUTTONS
  let pageDecrementButton = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementButton = <li onClick={handlePrevButton}> &hellip; </li>;
  }
  return (
    <>
      {status === "success" && (
        <>
          {data.length === 0 ? (
            <span>No data</span>
          ) : (
            <>
              <RenderTable headers={headers} currentItems={currentItems} />
              <PaginationComponent
                pages={pages}
                currentPage={currentPage}
                renderPageNumbers={renderPageNumbers}
                handlePrevButton={handlePrevButton}
                handleNextButton={handleNextButton}
                pageDecrementButton={pageDecrementButton}
                pageIncrementButton={pageIncrementButton}
                setItemsPerPage={setItemsPerPage}
                itemsPerPage={itemsPerPage}
                totalResults={totalResults}
                currentItems={currentItems.length}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Table;
