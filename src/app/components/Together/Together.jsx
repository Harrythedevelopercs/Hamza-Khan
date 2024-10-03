import Image from 'next/image'
import React from 'react'
import Style from './together.module.css'

import Arrow from 'media/arrowright.png';

export default function Together() {
    return (
        <>
            <div className={`${Style.container} group `}>
                <h2 className={`${Style.title} xs:group-hover:text-[20px] md:group-hover:text-[25px] lg:group-hover:text-[35px] xl:group-hover:text-[45px]`}>Let's Work Together</h2>
                <Image src={Arrow} alt="Hamza Khan" className={` ${Style.Arrow} group-hover:opacity-100 opacity-0 group-hover:rotate-180`} />
            </div>
        </>
    )
}
