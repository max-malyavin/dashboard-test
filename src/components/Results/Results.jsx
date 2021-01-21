import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import Title from "../Title/Title";
import chervon from "../../assets/images/Chevron.svg";

const Results = () => {
  const { getTest, currentResults } = useContext(GlobalContext);
  let { id } = useParams();

  useEffect(() => {
    getTest(id || 1, "currentResults");
  }, [id, getTest]);

  if (!currentResults) {
    return (
      <>
        <Title title={"Results"} />
        <p>loading....</p>
      </>
    );
  }

  return (
    <>
      <Title title={"Results"} />
      <div>{JSON.stringify(currentResults)}</div>;
      <Link
        to="/"
        style={{
          outline: "none",
          color: "#000",
          fontWeight: "700",
          fontSize: "18px",
          marginTop: "40%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={chervon}
          alt="arrow"
          style={{
            height: "8px",
            width: "16px",
            color: "#000",
            transform: "rotate(270deg)",
          }}
        />
        <span style={{ marginLeft: "7px" }}>Back</span>
      </Link>
    </>
  );
};

export default Results;
