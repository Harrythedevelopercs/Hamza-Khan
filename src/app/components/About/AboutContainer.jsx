import Image from "next/image";
import Marquee from "react-fast-marquee";
import Human from "media/human.png";
import BG from "media/bg1.png";
import Sign from "media/sign.png";
import Arrow from 'media/arrowright.png';
import Laptop from 'media/laptop.png';
import website from 'media/bits.jpeg';

import Style from './aboutcontainer.module.css'

export default function AboutContainer() {

    const Prompt = [
        `Let's Meet For A <span class="font-bold text-[#4285F4]">Coffee</span>`,
        `View More Featured <span class="font-bold text-[#DB4437]">Project's</span>`,
        `Email Me At <span class="font-bold text-[#0F9D58]">harrykennedy.cs@gmail.com</span>`,
        `Call Me <span class="font-bold text-[#F4B400]">+923162400202</span> `
    ]

    return (
        <div className={Style.container}>

            <div className={Style.column}>
                <Image src={BG} fill={true} className={Style.BgImage} alt="Hamza Khan" />
                <Marquee speed={20}>
                    {
                        Prompt.map((e,i) => (
                            <div key={i} className="inline-flex items-center">
                                <p  className={Style.headlines}  dangerouslySetInnerHTML={{__html: e }} /> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14px" height="14px">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            </div>
                        ))
                    }

                    
                </Marquee>
            </div>
            <div className="col-span-6  before:z-[0] before:w-full before:h-full  before:absolute before:content-[''] before:top-0 before:left-0 before:bg-custom-gradient before:opacity-25   px-[10px] py-[10px] overflow-hidden  rounded-3xl  relative after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(90deg,_rgb(255_255_255/_12%),_rgb(255_255_255/_1%))] after:z-[-8] after:rounded-[30px] after:m-[-1px] after:opacity-25
                flex  flex-col justify-center items-center gap-2
                
                ">
                <Image src={Sign} alt="Hamza Khan" className="  mx-auto brightness-200 invert md:max-w-[60%] lg:max-w-[65%] xl:max-w-[70%]" />

                <h2 className="text-white font-extralight capitalize md:text-[12px] lg:text-[14px] xl:text-[16px]">More About Me.</h2>
                <Image src={Arrow} alt="Hamza Khan" className=" md:w-[18px] lg:w-[20px] xl:w-[25px] brightness-200 invert" />
            </div>
            <div className="col-span-6  before:z-[0] before:w-full before:h-full  before:absolute before:content-[''] before:top-0 before:left-0 before:bg-custom-gradient before:opacity-25   px-[10px] py-[20px] before:rounded-3xl after:rounded-3xl  relative after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(90deg,_rgb(255_255_255/_12%),_rgb(255_255_255/_1%))] after:z-[-10] after:m-[-1px] after:opacity-25
                flex  flex-col justify-center items-center gap-1
                
                ">
                <div className="text-center relative overflow-hidden group">
                    <div className="md:h-[105px] lg:h-[140px] xl:h-[195px] overflow-hidden ">
                        <Image src={website} alt="Hamza Khan" className="mx-auto md:max-w-[75%] lg:max-w-[75%] xl:max-w-[80%] relative md:top-1 lg:top-3  group-hover:-top-[595%] transition-all duration-[5s] left-0" />
                    </div>

                    <Image src={Laptop} alt="Hamza Khan" className="absolute   brightness-105 inv   top-0 left-0 bottom-0 right-0 mx-auto  md:max-w-[90%] lg:max-w-[90%] xl:max-w-[95%] overflow-hidden drop-shadow-md" />
                </div>


            </div>


        </div>
    )
}
