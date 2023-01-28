import React from "react";
import { DropdownButton } from "react-bootstrap";
import "../../assets/css/pagination.css";

const PaginationComponent = ({
  pages,
  currentPage,
  renderPageNumbers,
  handlePrevButton,
  handleNextButton,
  pageDecrementButton,
  pageIncrementButton,
  setItemsPerPage,
  itemsPerPage,
  totalResults,
  currentItems,
  showall,
}) => {
  //itemsperpage = 10 + 20
  const handleClick = () => {
    setItemsPerPage(itemsPerPage + 100);
  };
  return (
    <div className="pagination">
      {showall ? (
        <span><b>Total Users : {totalResults}</b></span>
      ) : (
        <>
          <div className="pagination__results">
            <DropdownButton title="Load more" onClick={handleClick} />
            <span className="react-bootstrap-table-pagination-total pagination__results">
              page {currentPage} - {pages.length} of {totalResults} Results
            </span>
          </div>
          <div className="paginate">
            <ul className="pageNumbers">
              <li>
                <button
                  disabled={currentPage === pages[0] ? true : false}
                  onClick={handlePrevButton}
                >
                  {"<<"}
                </button>
              </li>
              {pageDecrementButton}
              {renderPageNumbers}
              {pageIncrementButton}
              <li>
                <button
                  disabled={
                    currentPage === pages[pages.length - 1] ? true : false
                  }
                  onClick={handleNextButton}
                >
                  {">>"}
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default PaginationComponent;
