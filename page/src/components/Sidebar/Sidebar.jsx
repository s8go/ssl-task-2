import React from "react";

const Sidebar = () => {
  return (
    <div className="col-md-3">
      <div type={"button"} style={{borderRadius:".5em", cursor:"pointer"}} className=" d-flex py-3 w-100 m-auto my-1 align-items-center justify-content-center">
        <p className="w-25 my-auto text-center">O</p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Board</p>
      </div>
      <div type={"button"} style={{borderRadius:".5em", cursor:"pointer"}} className=" d-flex py-3 w-100 m-auto my-1 align-items-center  justify-contentcentern">
        <p className="w-25 my-auto text-center">O</p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Plan Schedule</p>
      </div>
      <div type={"button"} style={{borderRadius:".5em", cursor:"pointer"}} className=" d-flex py-3 w-100 m-auto my-1 align-items-center justify-content-center">
        <p className="w-25 my-auto text-center">O</p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Reporting</p>
      </div>

      <div type={"button"} style={{borderRadius:".5em", cursor:"pointer"}} className=" d-flex py-3 w-100 m-auto my-1 align-items-center justify-content-center">
        <p className="w-25 my-auto text-center">O</p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Messages</p>
      </div>
      <div type={"button"} style={{borderRadius:".5em", cursor:"pointer"}} className=" d-flex py-3 w-100 m-auto my-1 align-items-center  justify-contentcentern">
        <p className="w-25 my-auto text-center">O</p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Team Member</p>
      </div>
      <div type={"button"} style={{borderRadius:".5em", cursor:"pointer"}} className=" d-flex py-3 w-100 m-auto my-1 align-items-center justify-content-center">
        <p className="w-25 my-auto text-center">O</p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Tools Plugin</p>
      </div>

      <div type={"button"} style={{borderRadius:".5em", cursor:"pointer"}} className=" d-flex py-3 w-100 m-auto my-1 align-items-center justify-content-center">
        <p className="w-25 my-auto text-center">O</p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Roadmap</p>
      </div>

      <div type={"button"} style={{borderRadius:".5em", cursor:"pointer"}} className=" d-flex py-3 w-100 m-auto my-1 align-items-center justify-content-center">
        <p className="w-25 my-auto text-center">O</p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Settings</p>
      </div>

      <div type={"button"} style={{borderRadius:".5em", cursor:"pointer", marginTop:"7em"}} className=" d-flex py-3 w-100 align-items-center justify-content-center">
        <p className="w-25 my-auto text-center">O</p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Logout</p>
      </div>
     </div>
  );
};

export default Sidebar;
