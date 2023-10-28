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
            <Skill icon={<DiHtml5/>} title={"Html"} percentaje={"80%"}/>
            <Skill icon={<DiCss3/>} title={"Css"} percentaje={"80%"}/>
            <Skill icon={<DiJsBadge/>} title={"Javascript"} percentaje={"70%"}/>
            <Skill icon={<DiBootstrap/>} title={"Bootstrap"} percentaje={"90%"}/>
            <Skill icon={<DiSass/>} title={"Sass"} percentaje={"70%"}/>
            <Skill icon={<DiReact/>} title={"React"} percentaje={"60%"}/>
            <Skill icon={<img src='/svg/ts.svg' alt='Typescript'/>} title={"Typescript"} percentaje={"50%"}/>
            <Skill icon={<DiRuby/>} title={"Ruby"} percentaje={"70%"}/>
            <Skill icon={<DiRor/>} title={"Ruby on Rails"} percentaje={"70%"}/>
            <Skill icon={<DiMysql/>} title={"Mysql"} percentaje={"60%"}/>
            <Skill icon={<DiGit/>} title={"Git"} percentaje={"70%"}/>
            <Skill icon={<DiLinux/>} title={"Linux"} percentaje={"70%"}/>
          </div>
    </section>
  )
}

export default Home;