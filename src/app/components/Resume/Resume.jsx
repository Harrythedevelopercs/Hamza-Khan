import Image from 'next/image'
import Arrow from 'media/arrowright.png';
import Style from './resume.module.css'

export default function Resume() {
    return (
        <div className={Style.container}>
            <h2 className={`${Style.Column} group-hover:text-[40px] group-hover:font-extralight`}>Resume </h2>
            <Image src={Arrow} alt="Hamza Khan" className={`${Style.ReadMoreImage} group-hover:opacity-100 opacity-0 group-hover:rotate-90 `} />
        </div>
    )
}
