import { BsCodeSlash } from 'react-icons/bs'
import { DiHtml5, 
         DiCss3, 
         DiJsBadge,
         DiBootstrap,
         DiSass,
         DiReact,
         DiRuby,
         DiRor,
         DiMysql,
         DiGit,
         DiLinux,
        } from 'react-icons/di'
import Skill from '../components/Skill'

function Home() {

  return (
    <section className="home-container">
          <div className="index">
            <p><BsCodeSlash/>Skills</p>
          </div>
          <p className='title_section'>My <span>Abilities</span></p>
          <div className="skills">
            <Skill icon={<DiHtml5/>} title={"Html"} />
            <Skill icon={<DiCss3/>} title={"Css"} />
            <Skill icon={<DiJsBadge/>} title={"Javascript"} />
            <Skill icon={<DiBootstrap/>} title={"Bootstrap"} />
            <Skill icon={<DiSass/>} title={"Sass"} />
            <Skill icon={<DiReact/>} title={"React"} />
            <Skill icon={<img src='/svg/ts.svg' alt='Typescript'/>} title={"Typescript"} />
            <Skill icon={<DiRuby/>} title={"Ruby"} />
            <Skill icon={<DiRor/>} title={"Ruby on Rails"} />
            <Skill icon={<DiMysql/>} title={"Mysql"} />
            <Skill icon={<DiGit/>} title={"Git"} />
            <Skill icon={<DiLinux/>} title={"Linux"} />
          </div>
    </section>
  )
}

export default Home;