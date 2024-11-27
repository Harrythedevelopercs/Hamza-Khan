import React from 'react'
import Style from './container.module.css'
import {Stats} from '@/app/components'

export default function Container() {
    return (
        <>
            <div className={Style.container}>
                <Stats StatsNumber={`10`} Description={`Years </br> Experience`} />
                <Stats StatsNumber={`+125`} Description={`CLIENTS </br>  WORLDWIDE`} />
                <Stats StatsNumber={`+210`} Description={`TOTAL </br> PROJECTS`} />
            </div>
        </>
    )
}
