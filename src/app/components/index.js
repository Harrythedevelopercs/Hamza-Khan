import dynamic from 'next/dynamic'




const Stats = dynamic(() => import('./Stats/Stats'))
const Together = dynamic(() => import('./Together/Together'))
const Container = dynamic(() => import('./Container/Container'))
const QrContainer = dynamic(() => import('./QR/QrContainer'))
const Devicon = dynamic(() => import('./DevIcon/Devicon'))
const ProfileContainer = dynamic(() => import('./ProfileContainer/ProfileContainer'))
const ServicesOffer = dynamic(() => import('./ServiceOffer/ServicesOffer'))
const Resume = dynamic(() => import('./Resume/Resume'))
const ProfileInformation = dynamic(() => import('./ProfileInformation/ProfileInformation'))
const AboutContainer = dynamic(() => import('./About/AboutContainer'))
const LaptopContainer = dynamic(() => import('./About/Laptop/LaptopContainer'))





export { Stats, Container, Together, QrContainer, Devicon, ProfileContainer, ServicesOffer, Resume, ProfileInformation, AboutContainer,LaptopContainer } 