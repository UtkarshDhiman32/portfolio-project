import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import ExampleProject from './components/Example-Project/ExampleProject'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Experience />
      <Skills />
      <ExampleProject />
      <Footer />
    </>
  )
}

export default App
