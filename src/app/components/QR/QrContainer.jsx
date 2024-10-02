import React from 'react'
import QR from 'media/qr.png'; 
import Image from 'next/image';
import Style from './qr.module.css'

export default function QrContainer() {
    return (
        <>
            <div className={Style.container}>
                <div className={Style.column}>
                    <h2 className={Style.scanMe}>Scan Me</h2>
                    <Image src={QR} alt="Hamza Khan" className={Style.QrImage} />
                </div>
            </div>
        </>
    )
}
