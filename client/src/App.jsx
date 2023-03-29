import React from 'react';
import './App.css'
import ContactsContainer from './contact/contactsContainer';


function App() {

  return (
    <div className="App">
      <h1>Contact App</h1>
      <div >
      <ContactsContainer/>
      </div>
      <p className="footer">
        {'Check out my other '}
          <a href="https://notes-app-ronnakash.vercel.app/" target="_blank" rel="noopener noreferrer">
            React apps
          </a> {'or '} 
          <a href="https://rons-portfolio-website.webflow.io/" target="_blank" rel="noopener noreferrer">
            other projects
          </a>!
      </p>
    </div>
  )
}

export default App
