import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../../../context/GlobalState";
import { randomInteger } from "../../../Helpers/randomInteger";
import { randomColor, statusItemColor } from "./ConstansData";
import MappingTable from "./MappingTable";
import NotMatch from "./NotMatch";
import "./Table.scss";
import chervon from "../../../assets/images/Chevron.svg";

const Table = ({ tableData, sitesData, resetInput, sortData }) => {
  const { headingColumns } = useContext(GlobalContext);
  const [toSort, setToSort] = useState({ sort: "ASC" });

  if (tableData && tableData.length === 0) {
    return <NotMatch resetInput={resetInput} />;
  }
  const sites = sitesData.reduce((acc, { id, url }) => {
    acc[id] = url;
    return acc;
  }, {});

  const data = tableData.map((row, index) => {
    let { rowData } = MappingTable(sites, row);

    return (
      <tr key={index}>
        {rowData.map((data, index, array) => {
          const statusColor = statusItemColor[array[3].val];
          const randomC = randomColor[randomInteger(0, 3)];
          const statusInfo = array[3].val;
          const idItem = array[0].id;

          if (!data["id"]) {
            return (
              <td
                key={index}
                data-heading={data.key}
                className="parentTd"
                style={{
                  ...{ color: index === 3 && statusColor },
                }}
              >
                <span
                  style={{
                    backgroundColor: randomC,
                  }}
                ></span>
                {data.val}
                {index === 4 && (
                  <button
                    className="button"
                    style={{
                      background:
                        statusInfo !== "Draft" ? "#2EE5AC" : "#7D7D7D",
                    }}
                  >
                    <Link
                      to={`/${
                        statusInfo === "Draft" ? "results/" : "finalize/"
                      }${idItem}`}
                      className="link"
                    >
                      {statusInfo !== "Draft" ? "Finalize" : "Results"}
                    </Link>
                  </button>
                )}
              </td>
            );
          }
          return null;
        })}
      </tr>
    );
  });

  return (
    <div className="table-container">
      <table className={"table-container__table"}>
        <thead>
          <tr>
            {headingColumns.map((col, index) => (
              <th key={index}>
                <span
                  style={{ cursor: "pointer", position: "relative" }}
                  onClick={() => {
                    if (toSort.sort === "ASC") {
                      setToSort({ sort: "DESC", index });
                      sortData(col.toLowerCase(), "DESC").call(this);
                    } else {
                      setToSort({ sort: "ASC", index });
                      sortData(col.toLowerCase(), "ASC").call(this);
                    }
                  }}
                >
                  {index === toSort.index && toSort.sort === "ASC" ? (
                    <img
                      src={chervon}
                      alt="arrow"
                      style={{
                        height: "7px",
                        position: "absolute",
                        right: "-20px",
                      }}
                    />
                  ) : (
                    <img
                      src={chervon}
                      alt="arrow"
                      style={{
                        height: "7px",
                        position: "absolute",
                        right: "-20px",
                        transform: "rotate(180deg)",
                      }}
                    />
                  )}
                  {col}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
};

export default Table;
