import React from 'react';
import "./App.css"
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Qualification from './components/qualification/Qualification';
import ScrollUp from './components/scrollup/ScrollUp';
import Services from './components/services/Services';
import Skills from './components/Skills/Skills';
import Testimonials from './components/testimonial/Testimonials';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Portfolio />
      <Testimonials/>
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App
