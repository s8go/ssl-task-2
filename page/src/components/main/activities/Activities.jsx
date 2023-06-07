import React from "react";
import Activity from "./Activity";
import { BsPhone, BsLaptop, BsCameraVideo, BsHeadset } from "react-icons/bs";
import { CgDatabase } from "react-icons/cg";
import { AiFillPieChart } from "react-icons/ai";
import { MdPayment, MdOutlineLibraryBooks } from "react-icons/md";


const Activities = () => {
  return (
    <div className="d-flex flex-wrap justify-content-evenly mt-5">
      <Activity
      color={"bg-pink"}
        icon={<BsPhone />}
        title={"App Development"}
        team={"Marketing Team"}
        progress={"34"}
        duration={"1 week"}
      />
      <Activity
      color={"bg-green"}
        icon={<BsLaptop />}
        title={"Web Instructors"}
        team={"Marketing Team"}
        progress={"14"}
        duration={"4 weeks"}
      />
      <Activity
      color={"bg-blue-chart"}
        icon={<CgDatabase />}
        title={"Web3 Managers"}
        team={"Marketing Team"}
        progress={"28"}
        duration={"5 days"}
      />
      <Activity
      color={"bg-yellow"}
        icon={<AiFillPieChart />}
        title={"Data Analysts"}
        team={"Marketing Team"}
        progress={"22"}
        duration={"2 weeks"}
      />
      <Activity
      color={"bg-purple"}
        icon={<MdPayment />}
        title={"Pay Stack"}
        team={"Big Data Dev"}
        progress={"55"}
        duration={"14 weeks"}
      />
      <Activity
      color={"bg-yellow"}
        icon={<MdOutlineLibraryBooks />}
        title={"Data Managers"}
        team={"Over look"}
        progress={"29"}
        duration={"1.5 weeks"}
      />
      <Activity
      color={"bg-blue-chart"}
        icon={<BsCameraVideo />}
        title={"Cinematography"}
        team={"Main stream"}
        progress={"4"}
        duration={"2 days"}
      />
      <Activity
      color={"bg-pink"}
        icon={<BsHeadset />}
        title={"Feed Back"}
        team={"Customer Relations"}
        progress={"32"}
        duration={"3 weeks"}
      />
    </div>
  );
};

export default Activities;
