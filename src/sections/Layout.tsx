import Home from "./Home"
import Experience from "./Experience"
import Projects from "./Projects"
import Certifications from "./Certifications"

function Layout() {
  return (
    <main className="layout">
        <Home/>
        <Experience/>
        <Projects/>
        <Certifications/>
    </main>
  )
}

export default Layout