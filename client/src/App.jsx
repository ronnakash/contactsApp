import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api.js'
import ContactsContainer from './contact/contactContainer';
import Contact from './contact/contactDisplay';
dotenv.config({ path: path.join(process.cwd()+"/src/", ".env") });


function App() {
  // const [isMobile, setIsMobile] = useState(false);


  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Contact App</h1>
      <div >
      <ContactsContainer/>
      {/* <Contact name={contacts[0]?.name} location={contacts[0]?.address}/> */}
      </div>
      <p className="footer">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
