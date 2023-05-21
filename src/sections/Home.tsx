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
    <div className="home-container">
          <div className="index">
            <p><BsCodeSlash/>Skills</p>
          </div>
          <p className='skills_title'>My <span>Abilities</span></p>
          <div className="skills">
            <Skill icon={<DiHtml5/>} title={"Html"} percentaje={"85%"}/>
            <Skill icon={<DiCss3/>} title={"Css"} percentaje={"90%"}/>
            <Skill icon={<DiJsBadge/>} title={"Javascript"} percentaje={"80%"}/>
            <Skill icon={<DiBootstrap/>} title={"Bootstrap"} percentaje={"60%"}/>
            <Skill icon={<DiSass/>} title={"Sass"} percentaje={"65%"}/>
            <Skill icon={<DiReact/>} title={"React"} percentaje={"75%"}/>
            <Skill icon={<p><img src='/svg/ts.svg'/></p>} title={"Typescript"} percentaje={"55%"}/>
            <Skill icon={<DiRuby/>} title={"Ruby"} percentaje={"60%"}/>
            <Skill icon={<DiRor/>} title={"Ruby on Rails"} percentaje={"75%"}/>
            <Skill icon={<DiMysql/>} title={"Mysql"} percentaje={"50%"}/>
            <Skill icon={<DiGit/>} title={"Git"} percentaje={"70%"}/>
            <Skill icon={<DiLinux/>} title={"Linux"} percentaje={"80%"}/>
          </div>
    </div>
  )
}

export default Home;