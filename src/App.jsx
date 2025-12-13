import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import ExampleProject from './components/Example-Project/ExampleProject'
import Footer from './components/Footer/Footer'
import { ThemeProvider } from './components/context/ThemeContext'

function App() {

  return (
    <>
      <ThemeProvider>

        <div className="min-h-screen transition-colors duration-300">

          <Navbar />
          <HeroSection />
          <Experience />
          <Skills />
          <ExampleProject />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
