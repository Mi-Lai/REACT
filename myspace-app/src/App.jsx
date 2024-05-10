//import { useState } from 'react'
/*........import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'................*.*/
/*import Navbar from "./components/navbar/Navbar.jsx"; /**/ 
import {Routes, Route } from "rect-router-dom";
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import Astro from './components /astros/Astro.jsx';
import "./App.css";



function App() {

  //Cremaos una constante para reutilizarla en un futuro
  const links = 
  [{
    id:1,
    text:"home",
    link: "/",
  },
  {
    id:2,
    text:"apod",
    link: "/apod",
  },
  {
    id:3,
    text:"astros",
    link: "/astros",
  },
 ];


 return (
   <>
   <Navbar header= "myspace-app" links={links} />
    <Routes>

      <Route element ={<Hero/>} path="/"/>
    
      <Route element ={<Astro/>} path="/"/>

    </Routes>

    
    
    </>
    );
}

export default App;