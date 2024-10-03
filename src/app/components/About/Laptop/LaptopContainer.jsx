import Laptop from 'media/laptop.png';
import website from 'media/bits.jpeg';
import Image from 'next/image';
import Style from './laptopcontainer.module.css'

export default function LaptopContainer() {
    return (
        <div className={`group ${Style.container}`}>
            <div className={Style.laptopContainer}>
                <Image src={website} alt="Hamza Khan" className={`group-hover:-top-[595%] ${Style.laptopImage}`} />
            </div>

            <Image src={Laptop} alt="Hamza Khan" className={Style.laptopLayer} />
        </div>
    )
}
