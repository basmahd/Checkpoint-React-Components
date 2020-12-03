import React from 'react';
import './App.css';
import Photoprofil from './Component/Profil/Photoprofil.js'
import FullName from './Component/Profil/FullName.js'
import Adress from './Component/Profil/Adress.js'
import Imageprofil from './Component/Profil/imageprofil.js';


function App() {
  return (
    <div className="App">
    <Photoprofil/>
    <FullName/>
    <div className='espace'> 
    <Imageprofil/>
     <Adress/>
    </div>
    </div>
  );
}

export default App;
