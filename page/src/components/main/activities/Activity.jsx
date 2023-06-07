import React from 'react'
import Image from "../../../assets/image1.jpg"

const Activity = () => {
  return (
    <div className=' bg-white m-2 my-4 p-2 px-3' style={{minWidth: "200px", borderRadius:"1em"}}>

        <div className=' bg-red rounded-circle text-center' style={{marginTop:"-2em", marginLeft:"1em", height:"3em", width:"3em"}}>
            O
        </div>

       <div className='border-bottom mt-4 mb-3' style={{ fontSize:".8em"}}>
       <h5>App Development</h5>
       <p>Marketing Team</p>
       <p >1 Week Left</p>
       </div>

       <div className='d-flex justify-content-between' style={{fontSize:".8em"}}>
        <div>
            <p >Team Members</p>
            <div className='d-flex '>
              <img src={Image} alt={Image} className='rounded-circle team-img d-inline-block' />
              <img src={Image} alt={Image} className='rounded-circle team-img d-inline-block' />
              <img src={Image} alt={Image} className='rounded-circle team-img d-inline-block' />
              <p className='d-inline-block border border-1 text-center team-img rounded-circle'>+</p>

            </div>
        </div>

        <div >
            <p >Progress</p>
            <p>35%</p>
        </div>
       </div>
    </div>
  )
}

export default Activity