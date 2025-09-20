import React from 'react'
import Frame1 from '../assets/images/Frame1.png'
import Frame2 from '../assets/images/Frame2.png'
import Frame3 from '../assets/images/Frame3.png'
import Frame4 from '../assets/images/Frame4.png'
import Frame5 from '../assets/images/Frame5.png'
import Frame6 from '../assets/images/Frame6.png'
import Frame7 from '../assets/images/Frame7.png'

const Logos = () => {
  return (
    <div className='w-[1771px] h-[139px] opacity-50 mt-[200px] '>
        <div className='flex justify-between gap-[35px] w-[220px] h-[139px]'>
          <img src={Frame1} alt="" />
          <img src={Frame2} alt="" />
          <img src={Frame3} alt="" />
          <img src={Frame4} alt="" />
          <img src={Frame5} alt="" />
          <img src={Frame6} alt="" />
          <img src={Frame7} alt="" />
        </div>
        
    </div>
  )
}

export default Logos