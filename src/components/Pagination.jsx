import React from 'react'
import './Pagination.css'
import { useEffect, useState } from "react";

export function Pagination({ setpages, length }) {
  const [currentpage, setCurrentPage] = useState(1);

  const nPage = [];
  for (let i = 1; i <= Math.ceil(length / 6); i++) {
    nPage.push(i);
  }
  useEffect(() => {
    setpages(1);
    setCurrentPage(1);
  }, [length]);

  function PrePage(e) {
    if (currentpage !== 1) {
      setpages(currentpage - 1);

      setCurrentPage(currentpage - 1);
      console.log("pre", currentpage);
    }
  }
  function changePage(n) {
    setpages(n);
    setCurrentPage(n);

    console.log("current", currentpage);
  }
  function NextPage(e) {
    if (currentpage !== nPage.length) {
      setpages(currentpage + 1);

      setCurrentPage(currentpage + 1);

      console.log("next", currentpage);
    }
  }
  console.log("out", currentpage);

  return (
    <div className="pagination-container">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item  ${currentpage == 1 ? "disabled" : ""}`}>
            <a className="page-link" href="#" onClick={PrePage}>
              Previous
            </a>
          </li>
          {nPage.map((n, i) => (
            <li className="page-item" key={i}>
              <a
                className={`page-link ${currentpage == n ? "active" : ""}`}
                href="#"
                onClick={(e) => changePage(n)}
              >
                {n}
              </a>
            </li>
          ))}

          <li
            className={`page-item ${
              currentpage == nPage.length ? "disabled" : ""
            }`}
          >
            <a className="page-link" href="#" onClick={NextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Pagination
