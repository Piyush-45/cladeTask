import Image from 'next/image'
import React from 'react'
import companyLogo from "../assets/companysquarelogo.png"

const JobDescFooter = () => {

  const footerItemsLeft = [
    { name: 'Company Size', answer: '1k-2k Employees' },
    { name: 'Sector', answer: 'Information Technology, Infrastructure' },
    { name: 'Founded In', answer: '2019' },
  ]

  const footerItemsRight = [
    { name: 'Type', answer: 'Private' },
    { name: 'Funding', answer: 'Bootstrapped' },
    { name: 'Founded By', answer: 'Scott Farquhar, Mike Cannon-Brookes' },
  ]

  return (
    <div className='px-[100px] py-[32px]'>

      <div className='flex flex-col gap-4 '>
        <div className='flex items-center gap-[6.5px] '>
          <Image src={companyLogo} width={40} height={40} alt='company logo' />
          <p className='text-[#4F4F4F] text-[20px]'>Atlassian</p>
        </div>

        <div className='grid grid-cols-2'>
          <div>{footerItemsLeft.map((item, index) => {
            return (
              <div key={index} className='mb-[24px]'>
                <p className='text-[#6E6D6D] text-sm'>{item.name}</p>
                <p className='text-[#3D3D3D] text-[16px] font-medium'>{item.answer}</p>
              </div>
            )
          })}
          </div>

          <div>{footerItemsRight.map((item, index) => {
            return (
              <div key={index} className='mb-[24px]'>
                <p className='text-[#6E6D6D] text-sm'>{item.name}</p>
                <p className='text-[#3D3D3D] text-[16px] font-medium'>{item.answer}</p>
              </div>
            )
          })}</div>

        </div>



      </div>
    </div>
  )
}

export default JobDescFooter
