import React from 'react'
import locationIcon from "../assets/locationIcon.png"
import moneyIcon from "../assets/moneyIcon.png"
import Image from 'next/image'
import elipse from "../assets/elipse.png"
import greendot from "../assets/greendot.png"
import figma from "../assets/figmaIcon.png"
import adobeIllustrator from "../assets/adobeIcon.png"
import adobexd from "../assets/adobexd.png"
import { defaultOverrides } from 'next/dist/server/require-hook'

const JobDescHeader = () => {
  const descItems = [
    { name: 'Delaware, USA', icon: locationIcon },
    { name: '$300K-$400K', icon: moneyIcon }
  ]

  const skillsRequired = [
    { name: 'Figma', Icon: figma },
    { name: 'Adobe Illustrator', Icon: adobeIllustrator },
    { name: 'Adobe XD', Icon: adobexd },
  ]

  const otherRequirements=[
    {
      RequirementName:'Prefered Language', answer:'English' 
    },
    {
      RequirementName:'Type', answer:'Full Time' 
    },
    {
      RequirementName:'Years of Experience', answer:'3+ years of experience' 
    },
  ]
  return (
    <div>
      <div className='px-[100px] py-[32px]'>
        {/* HEADING */}
        <div className='flex items-center gap-[12px] '>
          <h1 className='text-[#3D3D3D] text-[35px] font-semibold'>Senior Product Designer</h1>
          <Image src={elipse} height={4} width={4} className='object-contain ' alt='span' />
          <p className='text-[#888888] font-[14px]'> Posted 2 days ago</p>

          {/* status pill button */}

          <div className='bg-[#ECFDF3] w-fit flex gap-2 px-6 py-2 rounded-full '>
            <Image src={greendot} width={6} height={6} className='object-contain' alt={''} />
            <p className='text-[12px] font-medium text-[#067647]'>Open</p>
          </div>
        </div>
        {/*  */}

        <div className='mt-[24px] flex items-center'>
          {descItems.map((item, index) => {
            return (
              <div key={index} className='flex items-center gap-[12px] mr-4' >
                <Image src={item.icon} height={20} width={16} className='object-contain' alt={item.name} />
                <p className='text-[#5D5D5D] text-[20px]'>{item.name}</p>
                {index < descItems.length - 1 && (
                  <Image src={elipse} height={4} width={4} className='object-contain mx-[16px]' alt='separator' />
                )}
                {/* <Image src={elipse} height={4} width={4} className='object-contain ' alt='span' /> */}
              </div>
            )
          })}
        </div>

      </div>

      {/* skills required section */}

      <div className='flex  my-[32px] py-[32px] px-[100px] border-t-2 border-b-2'>

        <div >
          {/* skills */}
          <p className='text-[14px] font-medium text-[#6E6D6D]   '>Skills Required</p>
          {skillsRequired.map((item, index) => {
            return (
              <div key={index} className='flex items-center gap-1 p-1 border-2 rounded-[6px] border-[#E7E7E7] w-fit mt-2'>
                <Image src={item.Icon} alt={item.name} width={16} height={16} className='object-contain ' />
                <p >{item.name}</p>
              </div>
            )
          })}

        </div>

        <div className='flex  ml-[74px] gap-[74px]  '>
          {otherRequirements.map((item,index)=>{
            return(
              <div key={index} >
                <p className='text-[#6E6D6D] text-sm'>{item.RequirementName}</p>
                <p className='text-[#3D3D3D] font-semibold text-lg'>{item.answer}</p>
              </div>
            )
          })}
        </div>
      </div>


    </div>
  )
}

export default JobDescHeader



//Conditional Rendering:

// The dot image (elipse) is conditionally rendered only if the current index (index) is less than the length of the descItems array minus one (descItems.length - 1). This ensures that the dot is not added after the last item.