import {Hero, Navbar, Stats, About, Skills, Projects, Contact, Footer, TopButton} from './components'
import './assets/css/style.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <TopButton/>
    </div>
  )
}

export default App