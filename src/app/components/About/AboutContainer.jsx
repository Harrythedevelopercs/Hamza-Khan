import Image from "next/image";
import Marquee from "react-fast-marquee";
import Human from "media/human.png";
import BG from "media/bg1.png";
import Sign from "media/sign.png";
import Arrow from 'media/arrowright.png';


import Style from './aboutcontainer.module.css'
import LaptopContainer from "./Laptop/LaptopContainer";

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
                        Prompt.map((e, i) => (
                            <div key={i} className={Style.key}>
                                <p className={Style.headlines} dangerouslySetInnerHTML={{ __html: e }} />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14px" height="14px">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            </div>
                        ))
                    }


                </Marquee>
            </div>
            <div className={Style.column2}>
                <Image src={Sign} alt="Hamza Khan" className={Style.sign} />
                <h2 className={Style.aboutMe}>More About Me.</h2>
                <Image src={Arrow} alt="Hamza Khan" className={Style.Arrow} />
            </div>
            <div className={Style.column2}>
                <LaptopContainer />
            </div>


        </div>
    )
}
