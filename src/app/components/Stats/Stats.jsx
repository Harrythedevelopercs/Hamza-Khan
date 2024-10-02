import React from 'react'
import Style from './stats.module.css';

export default function Stats({ StatsNumber,Description }) {
  return (
    <>
      <div className={Style.box}>
        <h2 className={Style.StatsNumber}>{StatsNumber}</h2>
        <p className={Style.Description} dangerouslySetInnerHTML={{ __html: Description }} />
      </div>
    </>
  )
}
