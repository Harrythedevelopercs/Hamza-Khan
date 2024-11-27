
import { Devicon } from '..'
import Style from './services.module.css'
export default function ServicesOffer() {
    return (
        <div className={Style.container}>
            <div className="text-left">
                <h2 className={Style.title}>Skills.</h2>
            </div>
            <div className={Style.gridCol}>
                <Devicon IconName="devicon-laravel-original" />
                <Devicon IconName="devicon-html5-plain" />
                <Devicon IconName="devicon-css3-plain" />
                <Devicon IconName="devicon-nextjs-plain" />
                <Devicon IconName="devicon-python-plain" />
                <Devicon IconName="devicon-javascript-plain" />
                <Devicon IconName="devicon-mysql-plain-wordmark" />
                <Devicon IconName="devicon-flutter-plain" />
                <Devicon IconName="devicon-tailwindcss-original" />
                <Devicon IconName="devicon-django-plain-wordmark" />
                <Devicon IconName="devicon-wordpress-plain" />
                <Devicon IconName="devicon-dart-plain-wordmark" />
                <Devicon IconName="devicon-firebase-plain" />
                <Devicon IconName="devicon-mongodb-plain-wordmark" />
                <Devicon IconName="devicon-react-original" />
                <Devicon IconName="devicon-nodejs-plain-wordmark" />
                <Devicon IconName="devicon-php-plain" />
                <Devicon IconName="devicon-github-original-wordmark" />
            </div>


        </div>
    )
}
