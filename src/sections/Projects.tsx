import {BsRocketTakeoffFill} from 'react-icons/bs'
import Project from '../components/Project'

const lms_bg = "/images/projects_image/lms-bg.png";
const coffe_shop_bg = "/images/projects_image/coffe-shop-bg.png";
const fake_store_bg = "/images/projects_image/fake-store-bg.png"
const pomodoro_bg = "/images/projects_image/pomodoro-bg.jpeg"


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
            <p>Fake store hecha con React, React Router, React Query, Zustand y Boostrap</p>
            <Project src={fake_store_bg} url="https://fake-store-api-alce47.vercel.app/" alt='Fondo de una fake store' mobile={false}/>
            <p>Tienda de café hecho con Html, Css y Js</p>
            <Project src={coffe_shop_bg} url="https://coffee-shop-liard.vercel.app/" alt='Fondo de una Tienda de café' mobile={false}/>
            <p>Aplicación de Pomodoro con React Native</p>
            <Project src={pomodoro_bg} url="https://github.com/MarceloM47/pomodoro-react-native" alt='Fondo de una App de Pomodoro' mobile={true}/>
          </div>
    </section>
  )
}

export default Projects