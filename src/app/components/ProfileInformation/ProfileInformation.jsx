import Image from "next/image";
import Human from "media/human.png";
import BG from "media/bg1.png";
import Style from './profileInformation.module.css'
export default function ProfileInformation() {
    return (
        <div className={Style.container}>
            <Image src={BG} fill={true}  priority={true} className={Style.bgImage} alt="Hamza Khan" />
            <div className={Style.column}>
                <Image alt="Hamza Khan" src={Human} priority={true} className={Style.ProfileImage} />
            </div>
            <div className={Style.column}>
                <h3 className={Style.subtitle}>Full Stack Developer</h3>
                <h1 className={Style.title}>Hamza Khan</h1>
                <p className={Style.description}>Experienced Full Stack Developer From Pakistan</p>

            </div>

        </div>
    )
}
