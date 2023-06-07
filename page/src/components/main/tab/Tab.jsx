import React, { useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import { MdOutlineTableRows } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

const Tab = () => {
  const [active, setActive] = useState("all");
  return (
    <div className="d-sm-flex text-center justify-content-between align-items-center mt-4 flex-wrap">
      <div className="d-md-flex justify-content-start align-items-center p-3">
        <button
          className={`d-md-flex  d-inline-block  justify-content-center align-items-center mx-1 border-0 ${
            active === "all" && "active-tab"
          }`}
          onClick={() => setActive("all")}
        >
          <p>All</p>
          <p className="bg-white mx-3  p-1 px-2 tab">50</p>
        </button>
        <button
          className={`d-md-flex  d-inline-block  justify-content-center align-items-center mx-1 border-0 ${
            active === "started" && "active-tab"
          }`}
          onClick={() => setActive("started")}
        >
          <p>Started</p>
          <p className="bg-white mx-3  p-1 px-2 tab"> 20</p>
        </button>{" "}
        <button
          className={`d-md-flex  d-inline-block  justify-content-center align-items-center mx-1 border-0 ${
            active === "approval" && "active-tab"
          }`}
          onClick={() => setActive("approval")}
        >
          <p>Approval</p>
          <p className="bg-white mx-3  p-1 px-2 tab"> 12</p>
        </button>{" "}
        <button
          className={`d-md-flex  d-inline-block  justify-content-center align-items-center mx-1 border-0 ${
            active === "finished" && "active-tab"
          }`}
          onClick={() => setActive("finished")}
        >
          <p>Finished</p>
          <p className="bg-white mx-3  p-1 px-2 tab">17</p>
        </button>
      </div>

      <div className="d-flex justify-content-between align-items-center p-3">
        <button type="button" className="bg-white p-2 rounded-3 border-0 mx-1">
          <LuSettings2 /> More
        </button>
        <button type="button" className="bg-white p-2 rounded-3 active-menu mx-1">
          <MdOutlineTableRows />{" "}
        </button>
        <button type="button" className="bg-white p-2 rounded-3 border-0 mx-1">
          <AiOutlineMenu />{" "}
        </button>{" "}
      </div>
    </div>
  );
};

export default Tab;
