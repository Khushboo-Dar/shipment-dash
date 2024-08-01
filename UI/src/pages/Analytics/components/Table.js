import React, { useEffect, useState } from "react";
import "./Table.css";

const Table = ({ headings, data }) => {
  const [shipmentData, setShipmentData] = useState([]);
  const [locData, setLocData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    if (data) {
      setShipmentData(data.shipments);
      setLocData(data.locations);
    }
  }, [data]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = shipmentData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(shipmentData.length / rowsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when changing rows per page
  };

  return (
    <>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              {headings.map((ele, eleIndex) => (
                <td key={eleIndex}>{ele}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr key={row._id}>
                <td>{row.hbl_no}</td>
                <td>{row.mbl_no}</td>
                <td>{row.po_ref_no}</td>
                <td>
                  <p>{row.recipt}</p>
                  <p>{row.recipt_date}</p>
                </td>
                <td>
                  <p>{row.loading}</p>
                  <p>{row.loading_date}</p>
                </td>
                <td>
                  <p>{row.discharge}</p>
                  <p>{row.discharge_date}</p>
                </td>
                <td>
                  <p>{row.delivery}</p>
                  <p>{row.delivery_date}</p>
                </td>
                <td>{row.booking_no}</td>
                <td>{row.size_type}</td>
                <td>{row.carrier}</td>
                <td>{row.milestone}</td>
                <td>{row.milestone_group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-footer">
        <div className="rows-per-page">
          <select className="select-btn" value={rowsPerPage} onChange={handleRowsPerPageChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
          </select>
          <span className="row-range">
            {indexOfFirstRow + 1}-{Math.min(indexOfLastRow, shipmentData.length)}{" "}
            of {shipmentData.length}
          </span>
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Table;
