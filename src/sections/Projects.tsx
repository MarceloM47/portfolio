import {BsRocketTakeoffFill} from 'react-icons/bs'
import Project from '../components/Project'

const task_list_bg = "/src/assets/projects_image/task-list-bg.webp";
const coffe_shop_bg = "/src/assets/projects_image/coffe-shop-bg.webp";
const marcelo_shoes_bg = "/src/assets/projects_image/marcelo-shoes-bg.webp";

function Projects() {


  return (
    <div className="projects-container">
        <div className="index">
            <p><BsRocketTakeoffFill/>Projects</p>
        </div>
        <p className='title_section'>My <span>Projects</span></p>
          <div className="projects">
            <Project src={task_list_bg} url="https://task-list-rails.fly.dev/" alt='Fondo de una Task List en Ruby on Rails'/>
            <Project src={coffe_shop_bg} url="https://coffee-shop-liard.vercel.app/" alt='Fondo de una Tienda de café'/>
            <Project src={marcelo_shoes_bg} url="https://marcelo-shoes.vercel.app/" alt='Fondo de una tienda de zapatos'/>
          </div>
    </div>
  )
}

export default Projects