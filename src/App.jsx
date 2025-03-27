import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Champus from './components/Champus/Champus'
import Test from './components/Test/Test'
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program 'title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery 'title='Champus Photos'/>
        <Champus/>
        <Title subTitle='TESTIMONIALS 'title='What Student Says'/>
        <Test/>
        <Title subTitle='Contact Us 'title='Get In Touch'/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
