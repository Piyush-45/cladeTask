import React from 'react'
import Navbar from './components/Navbar'
import OptionMenu from './components/OptionMenu'
import JobDesc from './components/JobDesc'
import Siderbar from './components/Siderbar'

const page = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-9'>
        <JobDesc />
      </div>
      <div className='col-span-3'>
        <Siderbar />
      </div>
    </div>
  )
}

export default page
