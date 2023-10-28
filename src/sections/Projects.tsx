import {BsRocketTakeoffFill} from 'react-icons/bs'
import Project from '../components/Project'

const lms_bg = "/images/projects_image/lms-bg.png";
const coffe_shop_bg = "/images/projects_image/coffe-shop-bg.png";
const marcelo_shoes_bg = "/images/projects_image/marcelo-shoes-bg.png";

function Projects() {


  return (
    <section className="projects-container">
        <div className="index">
            <p><BsRocketTakeoffFill/>Projects</p>
        </div>
        <p className='title_section'>My <span>Projects</span></p>
          <div className="projects">
            <Project src={lms_bg} url="https://github.com/MarceloM47/Library-MS" alt='Fondo de una Task List en Ruby on Rails'/>
            <Project src={coffe_shop_bg} url="https://coffee-shop-liard.vercel.app/" alt='Fondo de una Tienda de café'/>
            <Project src={marcelo_shoes_bg} url="https://marcelo-shoes.vercel.app/" alt='Fondo de una tienda de zapatos'/>
          </div>
    </section>
  )
}

export default Projects