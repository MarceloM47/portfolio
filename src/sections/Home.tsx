import { BsCodeSlash } from 'react-icons/bs'
import { TbBrandNextjs } from "react-icons/tb";
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
         DiPostgresql,
         DiPython,
         DiAngularSimple,
         DiDocker
        } from 'react-icons/di'

import { 
         SiTailwindcss
       } from "react-icons/si";


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
            <Skill icon={<img src='/svg/ts.svg' alt='Typescript'/>} title={"Typescript"} />
            <Skill icon={<DiReact/>} title={"React"} />
            <Skill icon={<TbBrandNextjs />} title={"Nextjs"} />
            {/*
            <Skill icon={<SiReactrouter/>} title={"React Router"} />
            <Skill icon={<SiReactquery/>} title={"React Query"} />
            */}
            <Skill icon={<DiAngularSimple/>} title={"Angular"} />
            <Skill icon={<DiBootstrap/>} title={"Bootstrap"} />
            <Skill icon={<SiTailwindcss/>} title={"Tailwindcss"} />
            <Skill icon={<DiSass/>} title={"Sass"} />
            <Skill icon={<DiRuby/>} title={"Ruby"} />
            <Skill icon={<DiRor/>} title={"Ruby on Rails"} />
            <Skill icon={<DiPython/>} title={"Python"} />
            <Skill icon={<DiReact/>} title={"React Native"} />
            <Skill icon={<DiMysql/>} title={"MySQL"} />
            <Skill icon={<DiPostgresql/>} title={"PostgreSQL"} />
            <Skill icon={<DiDocker/>} title={"Docker"} />
            <Skill icon={<DiGit/>} title={"Git"} />
            <Skill icon={<DiLinux/>} title={"Linux"} />
          </div>
    </section>
  )
}

export default Home;