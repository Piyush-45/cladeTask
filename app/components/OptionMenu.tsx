import React from 'react'

const OptionMenu = () => {
  const menuOptions = ["Job preview", "Applicants", "Match", "Messages"]

  return (
    <div className='border-2 border-[#E7E7E7] px-[100px] py-[20px]'>
      <div className='flex items-center gap-[72px]'>
        {menuOptions.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex  items-center relative ${
                item === 'Job preview'
                  ? 'text-[#DC4A2D] font-semibold text-[20px]   '
                  : 'font-medium text-[20px] text-[#888888]'
              }`}
            >
              <p className='cursor-pointer'>{item}</p>
              {item === 'Job preview' && (
                <div className="absolute bottom-[-19px] left-1/2 w-4/6 h-1 bg-[#DC4A2D] transform -translate-x-1/2">
                  
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OptionMenu