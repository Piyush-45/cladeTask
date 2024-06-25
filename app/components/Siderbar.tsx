import Image from 'next/image'
import React from 'react'
import deleteicon from "../assets/deleteIcon.png"
import editicon from "../assets/editicon.png"
import applicantsicon from "../assets/applicantIcon.png"
import mathcesicons from "../assets/matchesIcon.png"
import messageicons from "../assets/messagesIcon.png"
import views from "../assets/eyeIcon.png"

const Siderbar = () => {

  const listItems = [
    { name: 'Applicants', icon: applicantsicon, number: 400 },
    { name: 'Matches', icon: mathcesicons, number: 100 },
    { name: 'Messages', icon: mathcesicons, number: 147 },
    { name: 'Views', icon: views, number: 800 },
  ]
  return (
    <div className='border-l-4 border-[#E7E7E7] h-full bg-[#FCFCFC] '>

      <div className='px-[25px] py-[36px]'>
        {/* buttons div */}
        <div className='flex gap-[16px]'>
          <div className='border-2 rounded-[8px] bg-[#FEF4F2] border-[#DC4A2D] px-6 py-3 flex items-center gap-[10px]'>
            <Image src={deleteicon} height={20} width={20} alt='delete job' />
            <p className='text-[#DC4A2D] text-[16px]'>Delete job</p>
          </div>

          <div className='border-2 rounded-[8px] bg-[#DC4A2D] border-[#DC4A2D] px-6 py-3 flex items-center gap-[10px] '>
            <Image src={editicon} height={20} width={20} alt='delete job' />
            <p className='text-white text-[16px]'>Edit job</p>
          </div>
        </div>
        {/* list div */}

        <div className='mt-[36px]'>
          {listItems.map((item, index) => {
            return (
              <div key={index} >
                <div className='flex  justify-between items-center '>
                  <div className='flex gap-[10px]'>
                    <Image src={item.icon} width={20} height={20} alt={item.name} className='object-contain' />
                    <p className='text-[#4F4F4F] text-[16px]'>{item.name}</p>
                  </div>
                  <div>
                    <p className='text-[#3D3D3D] text-[20px] font-semibold'>{item.number}</p>
                  </div>
                </div>

                {index < listItems.length - 1 && (
                  <div className='border-b-2 border-[#E7E7E7] my-4'></div>
                )}
              </div>
            )

          })}


        </div>

      </div>
    </div>
  )
}

export default Siderbar
