import React from 'react'
import './imageprofil.css';
import foto from './myphoto.jpg';



const Imageprofil = () => {
    return (
        <div>
          <img  className='imag' src={foto} alt="myphoto" />  
        </div>
    )
}

export default Imageprofil

