import React from 'react';
import './App.css';
import foto from './Component/Profil/myphoto.jpg';
import Photoprofil from './Component/Profil/Photoprofil.js'
import FullName from './Component/Profil/FullName.js'
import Adress from './Component/Profil/Adress.js'

function App() {
  return (
    <div className="App">
    <Photoprofil/>
    <FullName/>
    <div className='espace'> 
    <img  className='imag' src={foto} alt="myphoto" />
     <Adress/>
    </div>
   


    </div>
  );
}

export default App;
