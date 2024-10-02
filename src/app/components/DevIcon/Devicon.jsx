"use client"

import { useEffect } from 'react';
import Style from './devicon.module.css'
export default function Devicon({IconName}) {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    link.type = 'text/css';
    document.head.appendChild(link);

    // Cleanup to remove the stylesheet when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <i className={` ${IconName}  ${Style.iconSize} `}></i>
    </>
  );
}
