import React, { useState } from "react";
import {AiOutlineSchedule} from "react-icons/ai"
import {RxDashboard} from "react-icons/rx"
import {LuSettings2} from "react-icons/lu"
import {HiOutlineDocumentReport} from "react-icons/hi"
import {BiMessageSquare, BiWorld} from "react-icons/bi"
import {RiTeamLine, RiRoadMapLine} from "react-icons/ri"
import {SlLogout} from "react-icons/sl"






const Sidebar = () => {
  const [active, setActive] = useState("report")
  return (
    <div className="col-md-3">
      <div type={"button"} style={{borderRadius:"1em", cursor:"pointer"}} className={`d-flex py-3 w-75 m-auto my-1 align-items-center justify-content-center ${active === "board" && "active-side"}`} onClick={()=>setActive("board")}>
        <p className="w-25 my-auto text-center"><RxDashboard/></p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Board</p>
      </div>
      <div type={"button"} style={{borderRadius:"1em", cursor:"pointer"}} className={`d-flex py-3 w-75 m-auto my-1 align-items-center justify-content-center ${active === "schedule" && "active-side"}`} onClick={()=>setActive("schedule")}>
        <p className="w-25 my-auto text-center"><AiOutlineSchedule/></p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Plan Schedule</p>
      </div>
      <div type={"button"} style={{borderRadius:"1em", cursor:"pointer"}} className={`d-flex py-3 w-75 m-auto my-1 align-items-center justify-content-center ${active === "report" && "active-side"}`} onClick={()=>setActive("report")}>
        <p className="w-25 my-auto text-center"><HiOutlineDocumentReport/> </p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Reporting</p>
      </div>

      <div type={"button"} style={{borderRadius:"1em", cursor:"pointer"}} className={`d-flex py-3 w-75 m-auto my-1 align-items-center justify-content-center ${active === "message" && "active-side"}`} onClick={()=>setActive("message")}>
        <p className="w-25 my-auto text-center"><BiMessageSquare/> </p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Messages</p>
      </div>
      <div type={"button"} style={{borderRadius:"1em", cursor:"pointer"}}  className={`d-flex py-3 w-75 m-auto my-1 align-items-center justify-content-center ${active === "team" && "active-side"}`} onClick={()=>setActive("team")}>
        <p className="w-25 my-auto text-center"><RiTeamLine/> </p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Team Member</p>
      </div>
      <div type={"button"} style={{borderRadius:"1em", cursor:"pointer"}} className={`d-flex py-3 w-75 m-auto my-1 align-items-center justify-content-center ${active === "tools" && "active-side"}`} onClick={()=>setActive("tools")}>
        <p className="w-25 my-auto text-center"><BiWorld/> </p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Tools Plugin</p>
      </div>

      <div type={"button"} style={{borderRadius:"1em", cursor:"pointer"}} className={`d-flex py-3 w-75 m-auto my-1 align-items-center justify-content-center ${active === "roadmap" && "active-side"}`} onClick={()=>setActive("roadmap")}>
        <p className="w-25 my-auto text-center"><RiRoadMapLine/> </p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Roadmap</p>
      </div>

      <div type={"button"} style={{borderRadius:"1em", cursor:"pointer"}} className={`d-flex py-3 w-75 m-auto my-1 align-items-center justify-content-center ${active === "settings" && "active-side"}`} onClick={()=>setActive("settings")}>
        <p className="w-25 my-auto text-center"><LuSettings2/> </p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Settings</p>
      </div>

      <div type={"button"} style={{borderRadius:"1em", cursor:"pointer", marginTop:"7em"}} className=" d-flex py-3 w-75 mx-auto align-items-center justify-content-center">
        <p className="w-25 my-auto text-center"><SlLogout/> </p>
        <p className="mx-2 w-75 text-start my-auto " style={{fontSize:"1em"}}>Logout</p>
      </div>
     </div>
  );
};

export default Sidebar;
