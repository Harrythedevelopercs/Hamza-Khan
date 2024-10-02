import React from 'react'
import { Devicon } from '..'
import Style from './profile.module.css'

export default function ProfileContainer() {
    return (
        <>
            <div className={Style.container}>
                <div className={Style.column}>

                    <Devicon IconName={`devicon-linkedin-plain`} />
                    <Devicon IconName={`devicon-github-original`} />
                </div>
                <h2 className="text-white md:text-[11px] lg:text-[13px] xl:text-[15px] uppercase">Stay with me</h2>
            </div></>
    )
}
