import {BsRocketTakeoffFill} from 'react-icons/bs'
import Project from '../components/Project'

const lms_bg = "/images/projects_image/lms-bg.png";
const coffe_shop_bg = "/images/projects_image/coffe-shop-bg.png";
const fake_store_bg = "/images/projects_image/fake-store-bg.png"
const pomodoro_bg = "/images/projects_image/pomodoro-bg.jpeg"
const fake_store_mobile_bg = "/images/projects_image/fake-store-mobile-bg.jpeg"
const colacion_bg = "/images/projects_image/colacion-bg.png"
const qr_app = "/images/projects_image/qr-app.png"

function Projects() {


  return (
    <section className="projects-container">
        <div className="index">
            <p><BsRocketTakeoffFill/>Projects</p>
        </div>
        <p className='title_section'>My <span>Projects</span></p>
          <div className="projects">
            <p>Sistema de gestión de bibliotecas hecho con RoR, Postgresql y Bootstrap</p>
            <Project src={lms_bg} url="https://github.com/MarceloM47/Library-MS" alt='Fondo de un sistema de gestión de bibliotecas en Ruby on Rails' mobile={false}/>
            <p>Página web de invitación hecha con Html, Css, Javascript, Bootstrap y Firebase</p>
            <Project src={colacion_bg} url="https://marcelo-morinigo-colacion.vercel.app/" alt='Fondo de una invitación web a fiesta de colación' mobile={false}/>
            <p>Página web de generación de códigos QR hecha con React, Typescript y Tailwindcss</p>
            <Project src={qr_app} url="https://qr-code-generator-two-tau.vercel.app/" alt='Fondo de una página web de generación de códigos QR' mobile={false}/>
            <p>Tienda de café hecho con Html, Css y Javascript</p>
            <Project src={coffe_shop_bg} url="https://coffee-shop-liard.vercel.app/" alt='Fondo de una Tienda de café' mobile={false}/>
            <p>Aplicación de Pomodoro con React Native</p>
            <Project src={pomodoro_bg} url="https://github.com/MarceloM47/pomodoro-react-native" alt='Fondo de una App de Pomodoro' mobile={true}/>
            <p>Aplicación de Fake Store con React Native</p>
            <Project src={fake_store_mobile_bg} url="https://github.com/MarceloM47/mobile-fake-store" alt='Fondo de una App de Fake Store' mobile={true}/>
          </div>
    </section>
  )
}

export default Projects