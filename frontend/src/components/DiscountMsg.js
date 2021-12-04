import React from "react";

const Announcement = () => {
  return (
    <div
      className='container-fluid'
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "teal",
        color: "white",
        fontSize: "16px",
        fontWeight: "500"
      }}
    >
      {" "}
      Super Deal! Free Shipping on Orders Over 1000 AFN
    </div>
  );
};

export default Announcement;
