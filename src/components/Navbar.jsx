import React from 'react'
import lizard from '../assets/images/lizard.png'

const Navbar = () => {
  return (
    <div className='w-[1440px] h-[106px] border-b-[1px] border-[#EFEFEF] fixed bg-black'>
      <div className='w-[1240px] h-[65px] flex justify-between items-center mx-auto my-4'>
        <div className='flex justify-between gap-[33px] w-[690px]'>
          <div className='flex items-center gap-2 w-[145px] h-[65px] rounded-[15px] px-[22px] py-[17px] border-[1px] border-[#1E1E1E]'>
           <img src={lizard} alt="lizard icon" className='w-[29px] h-[29px]' />
           <p className='font-manrope font-[400px] text-[22px]'>Liz-co</p>
          </div>

         <div className='flex justify-between gap-[40px] w-[512px] h-[65px] rounded-[15px] px-[22px] py-[17px] border-[1px] border-[#1E1E1E] text-[18px] font-manrope font-[400px]'>
           <a href="#">Home</a>
           <a href="#">Projects</a>
           <a href="#">Resources</a>
            <a href="#">Blogs</a>
           <a href="#">About</a>
          </div>
        </div>
          

        <button type="submit" className='w-[126px] h-[50px] rounded-[20px] px-[29px] py-[10px] bg-[#FFFFFF] flex gap-[10px] 
         text-[18px] font-manrope font-[500px] text-[#000000]'>Sign Up</button>


       
      </div>




      
    </div>
  )
}

export default Navbar