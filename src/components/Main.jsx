import React from 'react'
import Logos from './Logos'
import Secondmain from './Secondmain'
import Footer from './Footer'
 

const Main = () => {
  return (
    <div className='flex flex-col gap-[35px]'>
        <div className='flex justify-center items-center gap-[37px] '>
            <div className='w-[610px] h-[422px] mt-[245px] ml-[100px]'>
                <div className='w-[610px] h-[335px] flex flex-col gap-[10px]'>
                    <div className='flex gap-[11px] w-[284px] h-[31px] rounded-[50px] px-[6px] py-[3px] bg-gray-700'>
                        <div className='flex '>
                           <img src="src/images/tiny1.png" alt="" className='w-[25px] h-[25px] rounded-[16px]' />
                           <img src="src/images/tiny2.png" alt="" className='w-[25px] h-[25px] rounded-[16px]' />
                           <img src="src/images/tiny3.png" alt="" className='w-[25px] h-[25px] rounded-[16px]' />
                           <img src="src/images/tiny4.png" alt="" className='w-[25px] h-[25px] rounded-[16px]' />
                        </div>

                        <p className='font-[400px] font-manrope text-[14px]'> Join our 34k happy clients</p>
                   </div>

                    <h1 id='beyond' className='w-[638px] h-[218px] text-[80px]'>Beyond Space Beyond Limit.</h1>
                    <p className='w-[423px] h-[66px] font-manrope font-[400px] text-[18px] text-[#B1B1B1]'>We innovate at the forefront of technology, crafting solutions that shape the future.</p>
                </div>

                <div className='flex items-center gap-[10px] w-[183px] h-[50px] rounded-[20px] px-[19px] py-[10px] bg-[#FFFFFF] mt-6'>
                    <p className='font-manrope font-[400px] text-[18px] text-[#000000] w-[102px] h-[25px]'>Get Started</p>
                    <img src="src/images/tinyarrow.png" alt="arrow" className='w-[33px] h-[33px] rounded-[14px] border-[1px] border-[#C1C1C1] shadow-[#5D5D5D] bg-[#000000]'/>
                </div>
            </div>
               

            <div>
                <img src="src/images/first man.png" alt="man image" className='w-[610px] h-[662px] rounded-[40px] border-[1px] border-[#151515] mt-[155px] mr-[100px]' />
            </div>
        </div>
        <Logos/>
        <div>
            <div className='w-[1065px] h-[316px] mt-[170px] mx-auto text-center'>
                <p className='text-[58px]' id='text'>Empowering the <span className='text-[#F1F1F1]'>next era</span> of cosmic discovery through <span className='text-[#F1F1F1]'>seamless, secure, </span> and <span className='text-[#F1F1F1]'>visionary technology</span> that <span className='text-[#F1F1F1]'>redefines exploration</span> and connection.</p>
            </div>

            <div className='w-[1240px] h-[620px] mt-[170px] mx-auto text-center'>
                <div className='h-[204px] w-[695px] mx-auto flex flex-col gap-[18px]'>
                    <p id='h2-text' className='h-[120px] w-[695px] text-[44px] font-[400]'>Powering the future with quantum automation</p>
                    <p className='w-[436px] h-[66px] text-[18px] font-[400] font-manrope mx-auto text-[#B1B1B1] mt-[18px]'>We innovate at the forefront of technology, crafting solutions that shape the future.</p>
                </div>
                <div className='w-[1240px] h-[364px] '>
                    <div className='flex justify-center mx-auto mt-[52px]'>
                        <div id='img1' className='w-[414px] h-[364px] p-5 border-y-[1px] border-[#4B4b4B] rounded-tl-[30px] rounded-bl-[30px]'>
                            <img src="src/images/img1.png" alt="" className='w-[373px] h-[198px] rounded-[10px]'/>
                            <div className='w-[373px] h-[111px] flex flex-col gap-[12px] mt-[10px] text-start'>
                                <p id='text1' className='w-[249px] h-[33px] text-[23px] font-[400]'>Space & Satellite Tech</p>
                                <p className='w-[373px] h-[66px] font-[400] text-[18px] text-[#B1B1B1] font-manrope'>Connecting earth through advanced <br />space tech</p>
                            </div>
                        </div>
                        <div id='img2' className='w-[414px] h-[364px] p-5 border-[1px] border-[#4B4b4B]'>
                            <img src="src/images/img2.png" alt="" className='w-[373px] h-[198px] rounded-[10px]'/>
                            <div className='w-[373px] h-[111px] flex flex-col gap-[12px] mt-[10px] text-start'>
                                <p id='text2' className='w-[249px] h-[33px] text-[23px] font-[400]'>Quantum Processing</p>
                                <p className='w-[373px] h-[66px] font-[400] text-[18px] text-[#B1B1B1] font-manrope'>Next-gen speed through quantum <br /> breakthroughs</p>
                            </div>
                        </div>
                        <div id='img3' className='w-[414px] h-[364px] p-5 border-y-[1px] border-r-[1px] border-[#4B4b4B] rounded-tr-[30px] rounded-br-[30px]'>
                            <img src="src/images/img3.png" alt="" className='w-[373px] h-[198px] rounded-[10px]'/>
                            <div className='w-[373px] h-[111px] flex flex-col gap-[12px] mt-[10px] text-start'>
                                <p id='text3' className='w-[249px] h-[33px] text-[23px] font-[400]'>BioTech Integration</p>
                                <p className='w-[373px] h-[66px] font-[400] text-[18px] text-[#B1B1B1] font-manrope'>Where biology meets intelligent <br /> technology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Secondmain/>
        <Footer/>
        





    </div>
  )
}

export default Main