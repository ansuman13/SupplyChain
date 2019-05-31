import React from 'react';
import Navbar from './Components/Layout/Navbar/Navbar'
import './app.css'


const App: React.FC = () => {
  return (
    <div className="App">
    <Navbar/> 
    <div className='color-box' >
    
    App JS content here
    </div>
     
    </div>
  );
}

export default App;
