import React from 'react'

export default function Qualification() {
    return (
        <div className="before:z-[0] h-full before:w-full before:h-full  before:absolute before:content-[''] before:top-0 before:left-0 before:bg-custom-gradient before:opacity-25  gap-5 p-[10px]  md:px-[20px] md:py-[20px] lg:px-[30px] lg:py-[30px] overflow-hidden flex flex-col justify-center items-start  rounded-3xl  relative after:content-['']   after:absolute after:inset-0 after:bg-[linear-gradient(90deg,_rgb(255_255_255/_12%),_rgb(255_255_255/_1%))] after:z-[-8] after:rounded-[30px] after:m-[-1px] after:opacity-25">
            <div className="">
                <h2 className="text-white text-left text-[30px] font-light">Academic Background</h2>
            </div>
            <div className='w-full'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-7'>
                        <h5 className='text-white text-[14px] font-bold'>Newports Institute of Communications and Economics</h5>
                        <p className='text-white  text-[14px] text-left'>Bachelor of Business Administration</p>
                    </div>
                    <div className='col-span-5'>
                        <h5 className='text-white text-[14px] text-right font-bold'>2024 - Present</h5>
                        <p className='text-white  text-[14px] text-right'>Karachi</p>
                    </div>
                </div>
                <hr className='my-5 text-white opacity-50' />
                <div className='grid grid-cols-12'>
                    <div className='col-span-7'>
                        <h5 className='text-white text-[14px] font-bold'>SM Govt Art & Commerce College</h5>
                        <p className='text-white  text-[14px] text-left'>Intermediate</p>
                    </div>
                    <div className='col-span-5'>
                        <h5 className='text-white text-[14px] text-right font-bold'>2011 - 2014</h5>
                        <p className='text-white  text-[14px] text-right'>Karachi</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
