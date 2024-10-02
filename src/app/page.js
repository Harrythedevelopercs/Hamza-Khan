import Image from "next/image";
import Marquee from "react-fast-marquee";
import Human from "media/human.png";
import BG from "media/bg1.png";
import Sign from "media/sign.png";
import Arrow from 'media/arrowright.png';
import Laptop from 'media/laptop.png';
import website from 'media/bits.jpeg';


import { Container, QrContainer, Together, ProfileContainer, ServicesOffer, Resume } from "./components";


export default function Home() {
  return (
    <section >
      <div className="my-10">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            {/* FIRST FOLD */}

            <div className="col-span-6 bg-[#0F0F0F] ">
              <div className="before:z-[0] h-full before:w-full before:h-full  before:absolute before:content-[''] before:top-0 before:left-0 before:bg-custom-gradient before:opacity-25  gap-5 md:px-[25px] md:py-[20px] lg:px-[50px] lg:py-[40px] overflow-hidden flex  justify-center items-center rounded-3xl  relative after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(90deg,_rgb(255_255_255/_12%),_rgb(255_255_255/_1%))] after:z-[-8] after:rounded-[30px] after:m-[-1px] after:opacity-25">
                <Image src={BG} fill={true} className="object-cover z-[-10]" alt="Hamza Khan" />
                <div className=" col-span-6 ">
                  <Image alt="Hamza Khan" src={Human} className="object-contain md:max-w-[120px] lg:max-w-[150px] xl:max-w-[180px] rounded-full   transition-all duration-1000" />
                </div>
                <div className="col-span-6 ">
                  <h3 className="text-[#BCBCBC] uppercase relative md:text-[10px] lg:text-[12px] xl:text-[16px]">Full Stack Web Developer</h3>
                  <h1 className="text-white md:text-[30px] lg:text-[40px] xl:text-[50px] relative leading-[1.1] font-medium ">Hamza Khan.</h1>
                  <p className="text-[#BCBCBC] md:text-[10px] xl:text-[12px] leading-snug mt-2">Experienced Full Stack Web Developer from Pakistan</p>

                </div>

              </div>
            </div>
            <div className="col-span-6 bg-[#0F0F0F]">
              <div className="grid grid-cols-12 bg-[#0f0f0f] gap-5">

                <div className=" col-span-12 before:z-[0] before:w-full before:h-full  before:absolute before:content-[''] before:top-0 before:left-0 before:bg-custom-gradient before:opacity-25  gap-5 px-[10px] py-[15px] overflow-hidden   justify-center items-center rounded-3xl  relative after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(90deg,_rgb(255_255_255/_12%),_rgb(255_255_255/_1%))] after:z-[-8] after:rounded-[30px] after:m-[-1px] after:opacity-25">
                  <Image src={BG} fill={true} className="object-cover z-[-10]" alt="Hamza Khan" />
                  <Marquee speed={20}>
                    <p className="text-white capitalize mx-2 md:text-[12px] lg:text-[14px] xl:text-[16px]">Let's Meet For A <span className="font-bold text-[#4285F4]">Coffee</span> </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14px" height="14px">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <p className="text-white capitalize mx-2 md:text-[12px] lg:text-[14px] xl:text-[16px]">View More Featured  <span className="font-bold text-[#DB4437]">Project's</span> </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14px" height="14px">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <p className="text-white mx-2 md:text-[12px] lg:text-[14px] xl:text-[16px]">Email Me At  <span className="font-bold text-[#0F9D58]">harrykennedy.cs@gmail.com</span> </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14px" height="14px">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <p className="text-white mx-2 md:text-[12px] lg:text-[14px] xl:text-[16px]">Call Me   <span className="font-bold text-[#F4B400]">+923162400202</span> </p>
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
            </div>

            {/* SECOND FOLD */}

            <div className="col-span-3 bg-[#0F0F0F] group">
              <Resume />
            </div>
            <div className="col-span-6 bg-[#0F0F0F]">
              <ServicesOffer />
            </div>
            <div className="col-span-3 bg-[#0F0F0F]">
              <ProfileContainer />
            </div>
            <div className="col-span-6 bg-[#0F0F0F]">
              <Container />
            </div>
            <div className="col-span-4 bg-[#0F0F0F] group">
              <Together />
            </div>
            <div className="col-span-2 bg-[#0F0F0F]">
              <QrContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
