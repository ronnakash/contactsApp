import React from 'react';
import './App.css'
import ContactsContainer from './contact/contactsContainer';


function App() {

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
