import React from 'react'
import Navbar from './Navbar'
import roasted from '../assets/roasted-coffee.jpg'


const Header = () => {
  return (
      <header style={{ backgroundImage:`url(${roasted})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
        
          <h1> All About Coffee </h1>
          
          <Navbar />
        
      </header>
    
    
  )
}

export default Header