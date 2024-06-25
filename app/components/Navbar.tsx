import React from 'react';
import jobsIcon from "../assets/jobsIcon.png";
import messageIcon from "../assets/messagesIcon.png";
import paymentIcon from "../assets/payementIcon.png";
import Image from 'next/image';
import bellIcon from "../assets/bellIcon.png"
import companyIcon from "../assets/companyLogo.png"
import downArrow from "../assets/downIcon.png"

const Navbar = () => {
  const navigationItems = [
    { name: 'Jobs', icon: jobsIcon },
    { name: 'Payment', icon: paymentIcon },
    { name: 'Message', icon: messageIcon }
  ];

  return (
    <div className='flex items-center justify-between px-[40px] py-[24px]'>
      {/* logo */}
      <h1 className='text-[20px] text-[#DC4A2D] font-bold'>Logo</h1>

      {/* navigation */}
      <div className='flex gap-[80px] border-[#D1D1D1] border-2 p-2 rounded-[36px]'>
        {navigationItems.map((item, index) => {
          return (
            <div
              key={index}
              className={item.name === 'Jobs' 
                ? 'flex items-center gap-2 px-4 py-2 bg-[#DC4A2D] text-white rounded-[50px]'
                : 'flex items-center gap-2 px-4 py-2'
              }
            >
              <Image src={item.icon} alt={item.name} width={20} height={20} />
              <p className={item.name === 'Jobs' ? 'text-[20px] text-white' : 'text-[20px] text-[#B0B0B0]'}>
                {item.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* profile */}
      <div className='flex gap-4'>
        <Image src={bellIcon} width={23} height={25} className='object-contain cursor-pointer' alt='notification'/>
        <Image src={companyIcon} width={40} height={40} className='object-contain cursor-pointer' alt='companylogo'/>
        <Image src={downArrow} width={20} height={20} className='object-contain cursor-pointer' alt='dropdown menu'/>
      </div>
    </div>
  );
};

export default Navbar;