

import dynamic from 'next/dynamic'



const Stats = dynamic(() => import('./Stats/Stats'))
const Together = dynamic(() => import('./Together/Together'))
const Container = dynamic(() => import('./Container/Container'))
const QrContainer = dynamic(() => import('./QR/QrContainer'))
const Devicon = dynamic(() => import('./DevIcon/Devicon'))
const ProfileContainer = dynamic(() => import('./ProfileContainer/ProfileContainer'))


export { Stats, Container, Together, QrContainer, Devicon, ProfileContainer } 