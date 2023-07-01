import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/home.scss";
import "./styles/Footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path = "/contact" element= {<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App