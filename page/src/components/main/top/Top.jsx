import React from 'react'
import {AiOutlinePlus} from "react-icons/ai"

const Top = () => {
  return (
    <div className='d-flex justify-content-between align-items-center border-bottom'>
       <div>
       <h4>Reporting</h4>
        <p>All project in current month</p>
       </div>

       <p className='border p-2 rounded-3 bg-blue text-white'><AiOutlinePlus/> </p>
    </div>
  )
}

export default Top