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


function Home() {

  return (
    <div className="home-container">
          <div className="index">
            <p><BsCodeSlash/> My skills</p>
          </div>
          <p className='skills_title'>My <span>Abilities</span></p>
          <div className="skills">
            <div className="skill" title='Html'>
              <p><DiHtml5/></p>
              <small>85%</small>
            </div>
            <div className="skill" title='Css'>
              <p><DiCss3/></p>
              <small>90%</small>
            </div>
            <div className="skill" title='Javascript'>
              <p><DiJsBadge/></p>
              <small>80%</small>
            </div>
            <div className="skill" title='Bootstrap'>
              <p><DiBootstrap/></p>
              <small>60%</small>
            </div>
            <div className="skill" title='Sass'>
              <p><DiSass/></p>
              <small>65%</small>
            </div>
            <div className="skill" title='React'>
              <p><DiReact/></p>
              <small>75%</small>
            </div>
            <div className="skill" title='Typescript'>
              <p><img src='/public/svg/ts.svg'/></p>
              <small>55%</small>
            </div>
            <div className="skill" title='Ruby'>
              <p><DiRuby/></p>
              <small>60%</small>
            </div>
            <div className="skill" title='Ruby on Rails'>
              <p><DiRor/></p>
              <small>75%</small>
            </div>
            <div className="skill" title='Mysql'>
              <p><DiMysql/></p>
              <small>50%</small>
            </div>
            <div className="skill" title='Git'>
              <p><DiGit/></p>
              <small>70%</small>
            </div>
            <div className="skill" title='Linux'>
              <p><DiLinux/></p>
              <small>80%</small>
            </div>
          </div>
    </div>
  )
}

export default Home;