import React from 'react'
import lizard from '../assets/images/lizard.png'
import twitter from '../assets/images/twitter.png'
import facebook from '../assets/images/facebook.png'
import linkedin from '../assets/images/linkedin.png'
import reddit from '../assets/images/reddit.png'


const Footer = () => {
  return (
    <div>
        <div className='w-[1240px] h-[440px] flex flex-col gap-[20px] mt-[140px] mx-auto items-center'>
            <div className='w-[1240px] h-[385px] flex items-center gap-[39px]'>
                <div className='w-[459px] h-[385px] rounded-[30px] border-[1px] border-[#1E1E1E]'>
                    <div className='w-[101px] h-[31px] flex items-center gap-[7px] mt-[29px] ml-[29px]'>
                        <img src={lizard} alt="" className='w-[31px] h-[31px]'/>
                        <p className='w-[63px] h-[30px] font-manrope font-[400] text-[22px]'>Liz.co</p>
                    </div>
                    <p className='w-[401px] h-[84px] ml-[29px] mt-[14px] font-manrope font-[400] text-[18px] text-[#898989]'>Our unparalleled voyages transform the dream of space travel into a tranquil reality, inviting you to discover the universe with peace and wonder.</p>
                    <div className='w-[263px] h-[56px] mt-[142px] ml-[29px]'>
                        <p className='w-[263px] h-[28px] font-manrope font-[400] text-[14px] text-[#898989]'>Location</p>
                        <p className='w-[263px] h-[28px] font-manrope font-[400] text-[18px] text-[#898989]'>35, Austin bridge, Lagos, Nigeria.</p>
                    </div>
                </div>

                <div className='w-[222px] h-[385px] flex flex-col gap-[15px]'>
                    <div className='w-[222px] h-[85px] rounded-[30px] border-[1px] border-[#1E1E1E] flex flex-col gap-[20px] px-[49px] py-[26px]'>
                        <p className='w-[51px] h-[25px] font-manrope font-[400] text-[18px] text-[#898989] text-center mx-auto'>Home</p>
                    </div>
                    <div className='w-[222px] h-[85px] rounded-[30px] border-[1px] border-[#1E1E1E] flex flex-col gap-[20px] px-[49px] py-[26px]'>
                        <p className='w-[61px] h-[25px] font-manrope font-[400] text-[18px] text-[#898989] text-center mx-auto'>Project</p>
                    </div>
                    <div className='w-[222px] h-[85px] rounded-[30px] border-[1px] border-[#1E1E1E] flex flex-col gap-[20px] px-[49px] py-[26px]'>
                        <p className='w-[47px] h-[25px] font-manrope font-[400] text-[18px] text-[#898989] text-center mx-auto'>Blogs</p>
                    </div>
                    <div className='w-[222px] h-[85px] rounded-[30px] border-[1px] border-[#1E1E1E] flex flex-col gap-[20px] px-[49px] py-[26px]'>
                        <p className='w-[51px] h-[25px] font-manrope font-[400] text-[18px] text-[#898989] text-center mx-auto'>About</p>
                    </div>


                </div>

                <div className='w-[222px] h-[385px] flex flex-col gap-[15px]'>
                     <div className='w-[222px] h-[85px] rounded-[30px] border-[1px] border-[#1E1E1E] flex flex-col gap-[20px] px-[49px] py-[26px]'>
                        <p className='w-[52px] h-[25px] font-manrope font-[400] text-[18px] text-[#898989] text-center mx-auto'>Terms</p>
                    </div>
                    <div className='w-[222px] h-[85px] rounded-[30px] border-[1px] border-[#1E1E1E] flex flex-col gap-[20px] px-[49px] py-[26px]'>
                        <p className='w-[118px] h-[25px] font-manrope font-[400] text-[18px] text-[#898989] text-center mx-auto'>Privacy Notice</p>
                    </div>
                    <div className='w-[222px] h-[85px] rounded-[30px] border-[1px] border-[#1E1E1E] flex flex-col gap-[20px] px-[49px] py-[26px]'>
                        <p className='w-[112px] h-[25px] font-manrope font-[400] text-[18px] text-[#898989] text-center mx-auto'>Legal Policies</p>
                    </div>
                    <div className='w-[222px] h-[85px] rounded-[30px] border-[1px] border-[#1E1E1E] flex flex-col gap-[20px] px-[49px] py-[26px]'>
                        <p className='w-[97px] h-[25px] font-manrope font-[400] text-[18px] text-[#898989] text-center mx-auto'>Partnership</p>
                    </div>

                </div>

                <div className='w-[222px] h-[385px] flex flex-col gap-[15px]'>
                    <div className='w-[222px] h-[85px] rounded-[30px] border-[1px] border-[#1E1E1E] flex flex-col gap-[20px] px-[49px] py-[26px]'>
                        <img src={twitter} alt="" className='mx-auto text-center w-[21px] h-[22px]' />
                    </div>
                    <div className='w-[222px] h-[85px] rounded-[30px] border-[1px] border-[#1E1E1E] flex flex-col gap-[20px] px-[49px] py-[26px]'>
                        <img src={facebook} alt="" className='mx-auto text-center w-[14px] h-[24px]' />
                    </div>
                    <div className='w-[222px] h-[85px] rounded-[30px] border-[1px] border-[#1E1E1E] flex flex-col gap-[20px] px-[49px] py-[26px]'>
                        <img src={linkedin} alt="" className='mx-auto text-center w-[25px] h-[23px]' />
                    </div>
                    <div className='w-[222px] h-[85px] rounded-[30px] border-[1px] border-[#1E1E1E] flex flex-col gap-[20px] px-[49px] py-[26px]'>
                        <img src={reddit} alt="" className='mx-auto text-center w-[24px] h-[24px]' />
                    </div>
                </div>

            </div>

            <div className='w-[1240px] h-[35px] rounded-[12px] border-[1px] border-[#1E1E1E] px-[49px] py-[4px]'>
                <p  className='font-manrope font-[500] text-[14px] text-[#4B4B4B] text-center mx-auto w-[1142px] h-[19px] '>Copyright Quickrooms 2025</p>
            </div>
        </div>

    </div>
  )
}

export default Footer