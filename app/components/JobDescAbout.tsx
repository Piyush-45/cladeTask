import React from 'react'

const JobDescAbout = () => {

  return (
    <div className='px-[100px] font-medium pb-[32px] border-b-2 border-[#E7E7E7]'>
      <p className='text-[#6E6D6D]'> About the job</p>

      {/* <div className="px-4 py-6"> */}
      {/* <div className="mb-4"> */}
      {/* <p className="text-lg font-bold mb-2">Responsibilities:</p> */}
      <ul className="list-decimal list-inside text-[#3D3D3D] mb-2">
        <li>Handle the UI/UX research design</li>
        <li>Work on researching on latest web applications designs & trends</li>
        <li>Work on conceptualizing and visualizing</li>
        <li>Work on creating graphics content and other graphic related works</li>
      </ul>
      {/* </div> */}

      <div className="">
        <p className="text-lg text-[#3D3D3D] ">Benefits:</p>
        <ul className="list-disc list-inside">
          <li className='text-[#3D3D3D] text-[16px] pl-2'>Health insurance</li>
          <li className='text-[#3D3D3D] text-[16px] pl-2'>Provident Fund</li>
        </ul>
      </div>

      <div className="">
        <p className="text-lg text-[#3D3D3D] mb-2">Schedule:</p>
        <li className='text-[#3D3D3D] text-[16px] pl-2'>Day shift</li>
      </div>

      <div className="">
        <p className="text-lg text-[#3D3D3D] mb-2">Supplemental pay types:</p>
        <ul className="list-disc list-inside">
          <li className='text-[#3D3D3D] text-[16px] pl-2'>Performance bonus</li>
          <li className='text-[#3D3D3D] text-[16px] pl-2'>Yearly bonus</li>
        </ul>
      </div>

      <div className='flex items-center  gap-2'>
        <p className="text-lg text-[#3D3D3D] ">Work Location:</p>
        <p className='text-[#3d3d3d]'>In person</p>
      </div>
      {/* </div> */}
    </div>
  )
}

export default JobDescAbout
