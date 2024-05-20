import './App.css'
import Menu from './sections/Menu'
import Layout from './sections/Layout'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <div className='app-container'>
        <SpeedInsights/>
        <Analytics/>
        <Menu/>
        <Layout/>
      </div>
    </>
  )
}

export default App
