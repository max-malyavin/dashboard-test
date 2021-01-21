import React from "react";

const NotMatch = ({ resetInput }) => {
  return (
    <div className="not-match">
      <p>Your search did not match any results.</p>
      <button onClick={resetInput}>Reset</button>
    </div>
  );
};

export default NotMatch;
