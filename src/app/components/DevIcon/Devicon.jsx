"use client"

import { useEffect } from 'react';
import Style from './devicon.module.css'
export default function Devicon({IconName}) {
  

  return (
    <>
      <i className={` ${IconName}  ${Style.iconSize} `}></i>
    </>
  );
}
