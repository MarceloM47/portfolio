import Home from "./Home"
import Projects from "./Projects"
import Certifications from "./Certifications"

function Layout() {
  return (
    <div className="layout">
        <Home/>
        <Projects/>
        <Certifications/>
    </div>
  )
}

export default Layout