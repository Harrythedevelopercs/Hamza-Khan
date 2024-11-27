import Image from 'next/image';

import ProjectOne from 'media/bits.jpeg'
import { Devicon } from '../components';


export const metadata = {
    title: "Hamza Khan | Development Portfolio",
    description: "Experienced Full Stack Web Developer from Pakistan specializing in building dynamic, high-performance websites and applications. Proficient in front-end and back-end technologies, delivering customized solutions for businesses.",

};

export default function page() {
    return (
        <section >
            <div className="my-10">
                <div className="container">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-6">
                            <h1 className="text-white font-semibold text-[65px]">ALL PROJECTS</h1>
                        </div>
                        <div className="col-span-6 group">
                            <div className="before:z-[0] h-450px before:w-full before:h-full  before:absolute before:content-[''] before:top-0 before:left-0 before:bg-custom-gradient before:opacity-25  gap-5 px-[15px] py-[15px]  md:px-[25px] md:py-[20px] lg:px-[20px] lg:py-[20px] overflow-hidden grid grid-cols-12 md:flex  justify-center items-center rounded-3xl  relative after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(90deg,_rgb(255_255_255/_12%),_rgb(255_255_255/_1%))] after:z-[-8] after:rounded-[30px] after:m-[-1px] after:opacity-25 xs:text-center transition-all duration-1000 group-hover:cursor-pointer">
                                <div className="relative">
                                    <div className=" h-[300px]  overflow-hidden group rounded-2xl ">
                                        <iframe src="https://www.bitswits.co/" className="w-[550px] h-[350px]"></iframe>
                                    </div>
                                    <div className="flex items-center justify-between transition-all duration-1000 delay-300 opacity-0 group-hover:opacity-100 mt-[-60px] group-hover:mt-0 ">
                                        <div className=" bg-red-800 w-[150px] text-center py-[15px] relative rounded-lg  mt-3 ">
                                            <p className="text-white font-semibold">View Project</p>
                                        </div>
                                        <div className="mt-3 flex gap-3 ">
                                            <Devicon IconName="devicon-nextjs-plain" />
                                            <Devicon IconName="devicon-javascript-plain" />
                                            <Devicon IconName="devicon-react-original" />
                                            <Devicon IconName="devicon-github-original-wordmark" />
                                            <Devicon IconName="devicon-tailwindcss-original" />
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className="col-span-6 group">
                            <div className="before:z-[0] h-450px before:w-full before:h-full  before:absolute before:content-[''] before:top-0 before:left-0 before:bg-custom-gradient before:opacity-25  gap-5 px-[15px] py-[15px]  md:px-[25px] md:py-[20px] lg:px-[20px] lg:py-[20px] overflow-hidden grid grid-cols-12 md:flex  justify-center items-center rounded-3xl  relative after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(90deg,_rgb(255_255_255/_12%),_rgb(255_255_255/_1%))] after:z-[-8] after:rounded-[30px] after:m-[-1px] after:opacity-25 xs:text-center transition-all duration-1000 group-hover:cursor-pointer">
                                <div className="relative">
                                    <div className=" h-[300px]  overflow-hidden group rounded-2xl ">
                                        <Image src={ProjectOne} alt="Hamza Khan" className="transition-all duration-1000 delay-300 w-[550px]  relative mx-auto" />
                                    </div>
                                    <div className="flex items-center justify-between transition-all duration-1000 delay-300 opacity-0 group-hover:opacity-100 mt-[-60px] group-hover:mt-0 ">
                                        <div className=" bg-red-800 w-[150px] text-center py-[15px] relative rounded-lg  mt-3 ">
                                            <p className="text-white font-semibold">View Project</p>
                                        </div>
                                        <div className="mt-3 flex gap-3 ">
                                            <Devicon IconName="devicon-nextjs-plain" />
                                            <Devicon IconName="devicon-javascript-plain" />
                                            <Devicon IconName="devicon-react-original" />
                                            <Devicon IconName="devicon-github-original-wordmark" />
                                            <Devicon IconName="devicon-tailwindcss-original" />
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className="col-span-6 group">
                            <div className="before:z-[0] h-450px before:w-full before:h-full  before:absolute before:content-[''] before:top-0 before:left-0 before:bg-custom-gradient before:opacity-25  gap-5 px-[15px] py-[15px]  md:px-[25px] md:py-[20px] lg:px-[20px] lg:py-[20px] overflow-hidden grid grid-cols-12 md:flex  justify-center items-center rounded-3xl  relative after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(90deg,_rgb(255_255_255/_12%),_rgb(255_255_255/_1%))] after:z-[-8] after:rounded-[30px] after:m-[-1px] after:opacity-25 xs:text-center transition-all duration-1000 group-hover:cursor-pointer">
                                <div className="relative">
                                    <div className=" h-[300px]  overflow-hidden group rounded-2xl ">
                                        <Image src={ProjectOne} alt="Hamza Khan" className="transition-all duration-1000 delay-300 w-[550px]  relative mx-auto" />
                                    </div>
                                    <div className="flex items-center justify-between transition-all duration-1000 delay-300 opacity-0 group-hover:opacity-100 mt-[-60px] group-hover:mt-0 ">
                                        <div className=" bg-red-800 w-[150px] text-center py-[15px] relative rounded-lg  mt-3 ">
                                            <p className="text-white font-semibold">View Project</p>
                                        </div>
                                        <div className="mt-3 flex gap-3 ">
                                            <Devicon IconName="devicon-nextjs-plain" />
                                            <Devicon IconName="devicon-javascript-plain" />
                                            <Devicon IconName="devicon-react-original" />
                                            <Devicon IconName="devicon-github-original-wordmark" />
                                            <Devicon IconName="devicon-tailwindcss-original" />
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className="col-span-6 group">
                            <div className="before:z-[0] h-450px before:w-full before:h-full  before:absolute before:content-[''] before:top-0 before:left-0 before:bg-custom-gradient before:opacity-25  gap-5 px-[15px] py-[15px]  md:px-[25px] md:py-[20px] lg:px-[20px] lg:py-[20px] overflow-hidden grid grid-cols-12 md:flex  justify-center items-center rounded-3xl  relative after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(90deg,_rgb(255_255_255/_12%),_rgb(255_255_255/_1%))] after:z-[-8] after:rounded-[30px] after:m-[-1px] after:opacity-25 xs:text-center transition-all duration-1000 group-hover:cursor-pointer">
                                <div className="relative">
                                    <div className=" h-[300px]  overflow-hidden group rounded-2xl ">
                                        <Image src={ProjectOne} alt="Hamza Khan" className="transition-all duration-1000 delay-300 w-[550px]  relative mx-auto" />
                                    </div>
                                    <div className="flex items-center justify-between transition-all duration-1000 delay-300 opacity-0 group-hover:opacity-100 mt-[-60px] group-hover:mt-0 ">
                                        <div className=" bg-red-800 w-[150px] text-center py-[15px] relative rounded-lg  mt-3 ">
                                            <p className="text-white font-semibold">View Project</p>
                                        </div>
                                        <div className="mt-3 flex gap-3 ">
                                            <Devicon IconName="devicon-nextjs-plain" />
                                            <Devicon IconName="devicon-javascript-plain" />
                                            <Devicon IconName="devicon-react-original" />
                                            <Devicon IconName="devicon-github-original-wordmark" />
                                            <Devicon IconName="devicon-tailwindcss-original" />
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className="col-span-6 group">
                            <div className="before:z-[0] h-450px before:w-full before:h-full  before:absolute before:content-[''] before:top-0 before:left-0 before:bg-custom-gradient before:opacity-25  gap-5 px-[15px] py-[15px]  md:px-[25px] md:py-[20px] lg:px-[20px] lg:py-[20px] overflow-hidden grid grid-cols-12 md:flex  justify-center items-center rounded-3xl  relative after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(90deg,_rgb(255_255_255/_12%),_rgb(255_255_255/_1%))] after:z-[-8] after:rounded-[30px] after:m-[-1px] after:opacity-25 xs:text-center transition-all duration-1000 group-hover:cursor-pointer">
                                <div className="relative">
                                    <div className=" h-[300px]  overflow-hidden group rounded-2xl ">
                                        <Image src={ProjectOne} alt="Hamza Khan" className="transition-all duration-1000 delay-300 w-[550px]  relative mx-auto" />
                                    </div>
                                    <div className="flex items-center justify-between transition-all duration-1000 delay-300 opacity-0 group-hover:opacity-100 mt-[-60px] group-hover:mt-0 ">
                                        <div className=" bg-red-800 w-[150px] text-center py-[15px] relative rounded-lg  mt-3 ">
                                            <p className="text-white font-semibold">View Project</p>
                                        </div>
                                        <div className="mt-3 flex gap-3 ">
                                            <Devicon IconName="devicon-nextjs-plain" />
                                            <Devicon IconName="devicon-javascript-plain" />
                                            <Devicon IconName="devicon-react-original" />
                                            <Devicon IconName="devicon-github-original-wordmark" />
                                            <Devicon IconName="devicon-tailwindcss-original" />
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
