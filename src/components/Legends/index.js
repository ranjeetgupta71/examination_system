import React from "react";

const Legends = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="square-box-green"></div>Attempted
      <div className="square-box-red"></div>Unattempted
      <div className="square-box-visited"></div>visited + Unattempted
    </div>
  );
};

export default Legends;
