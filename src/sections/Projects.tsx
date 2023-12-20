import {BsRocketTakeoffFill} from 'react-icons/bs'
import Project from '../components/Project'

const lms_bg = "/images/projects_image/lms-bg.png";
const coffe_shop_bg = "/images/projects_image/coffe-shop-bg.png";
const advice_bg = "/images/projects_image/advice-generator-bg.png"

function Projects() {


  return (
    <section className="projects-container">
        <div className="index">
            <p><BsRocketTakeoffFill/>Projects</p>
        </div>
        <p className='title_section'>My <span>Projects</span></p>
          <div className="projects">
            <p>Sistema de gestión de bibliotecas hecho con RoR, Postgresql y Bootstrap</p>
            <Project src={lms_bg} url="https://github.com/MarceloM47/Library-MS" alt='Fondo de un sistema de gestión de bibliotecas en Ruby on Rails'/>
            <p>Generador de consejos con la API de "Advice Slip" hecho con React, Sass y Typescript</p>
            <Project src={advice_bg} url="https://advice-generator-alce47.vercel.app/" alt='Fondo de un generador de consejos'/>
            <p>Tienda de café hecho con Html, Css y Js</p>
            <Project src={coffe_shop_bg} url="https://coffee-shop-liard.vercel.app/" alt='Fondo de una Tienda de café'/>
          </div>
    </section>
  )
}

export default Projects