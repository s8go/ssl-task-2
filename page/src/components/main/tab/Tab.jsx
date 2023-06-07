import React from "react";

const Tab = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-4 ">
      <div className="d-flex justify-content-start align-items-center w-50">
        <button className="d-flex justify-content-center align-items-center mx-3 border-0">
          <p>All</p>
          <p className="bg-white  p-1 px-2  mx-3 tab">20</p>
        </button>
        <div className="d-flex justify-content-center align-items-center mx-3 border-0">
          <p>Started</p>
          <p className="bg-white  p-1 px-2 mx-3 tab"> 20</p>
        </div>{" "}
        <div className="d-flex justify-content-center align-items-center mx-3 border-0">
          <p>Approval</p>
          <p className="bg-white  p-1 px-2 mx-3 tab"> 20</p>
        </div>{" "}
        <div className="d-flex justify-content-center align-items-center mx-3 border-0">
          <p>Finished</p>
          <p className="bg-white  p-1 px-2  mx-3 tab" >20</p>
        </div>
      </div>


        <div className="d-flex justify-content-between w-25 align-items-center">
          <p>More</p>
          <p>=</p>
          <p>=</p>{" "}
        </div>
    </div>
  );
};

export default Tab;
