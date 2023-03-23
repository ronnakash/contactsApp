import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api.js'
import ContactContainer from './contact/contactContainer';
import Contact from './contact/contactDisplay';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    // Check if the media query matches initially
    setIsMobile(mediaQuery.matches);
    const contacts = api.getContacts();
    api.getContacts().then((data) => setContacts(data));

  }, []);

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
      <ContactContainer contacts={contacts} isMobile={isMobile}/>
      {/* <Contact name={contacts[0]?.name} location={contacts[0]?.address}/> */}
      </div>
      <p className="footer">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
