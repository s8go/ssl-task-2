import React from 'react'
import Top from './top/Top'
import Tab from './tab/Tab'
import Activities from './activities/Activities'

const Main = () => {
  return (
    <main className='col-sm col-md-9 gray-bg p-5' style={{borderRadius:".5em"}}>
      <Top/>
      <Tab/>
      <Activities/>
    </main>
  )
}

export default Main