import React from 'react'
import Top from './top/Top'
import Tab from './tab/Tab'
import Activities from './activities/Activities'

const Main = () => {
  return (
    <main className=' gray-bg p-5 rounded-5' >
      <Top/>
      <Tab/>
      <Activities/>
    </main>
  )
}

export default Main