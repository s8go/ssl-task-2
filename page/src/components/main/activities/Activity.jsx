import React from 'react'
import Image2 from "../../../assets/image-2.jpg"
import Image3 from "../../../assets/image-3.jpg"
import Image4 from "../../../assets/image-4.jpg"
import {GiAlarmClock} from "react-icons/gi"
import {VscCompass} from "react-icons/vsc"



const Activity = ({icon, progress, title, team, duration, color}) => {
  return (
    <div className=' bg-white m-2 my-4 p-2 px-3' style={{minWidth: "200px", borderRadius:"1em"}}>

        <div className={'text-center  text-white w-75 task '} style={{marginTop:"-2em"}}>
            <p className={'rounded-circle m-0 py-3 w-50 title ' + color}>{icon}</p>
        </div>

       <div className='border-bottom mt-4 mb-3' style={{ fontSize:".8em"}}>
       <h5 className='font-weight-bold'>{title}</h5>
       <p><VscCompass/> {team}</p>
       <p ><GiAlarmClock/> {duration} Left</p>
       </div>

       <div className='d-flex justify-content-between' style={{fontSize:".8em"}}>
        <div>
            <p >Team Members</p>
            <div className='d-flex '>
              <img src={Image2} alt={Image2} className='rounded-circle team-img d-inline-block' />
              <img src={Image4} alt={Image4} className='rounded-circle team-img d-inline-block' />
              <img src={Image3} alt={Image3} className='rounded-circle team-img d-inline-block' />
              <p className='d-inline-block border border-black border-1 text-center team-img rounded-circle'>+</p>

            </div>
        </div>

        <div >
            <p >Progress</p>
            <p>{progress}%</p>
        </div>
       </div>
    </div>
  )
}

export default Activity