import React from "react";

const Legends = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="square-box-green" style={{ borderRadius: "50%" }}></div>Answered
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="square-box-gray" style={{ borderRadius: "50%" }}></div>Not Visited
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="square-box-red" style={{ borderRadius: "50%" }}></div>Not Answered
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="square-box-blue" style={{ borderRadius: "50%" }}></div>Current
      </div>
    </div>
  );
};

export default Legends;
