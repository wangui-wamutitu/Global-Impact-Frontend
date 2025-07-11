import React from 'react'

type THeaderText = {
    headingText: string;
    subText: string
}

const HeaderText = ({headingText, subText}: THeaderText) => {
  return (
    <div className='w-full flex items-center justify-center flex-col'>
        <h1 className='w-[300px] text-center text-primary-dark mb-5 text-xl md:text-3xl font-semibold'>{headingText}</h1>
        <p className='mb-5 text-center text-secondary-dark'>{subText}</p>
    </div>
  )
}

export default HeaderText