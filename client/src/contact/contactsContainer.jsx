import React, { useState, useEffect } from 'react';
import Contact from './contact';
import '../App.css'
import Swal from 'sweetalert';
import api from '../api';
import NewContact from './newContact'

function ContactsContainer({}) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    handleFetch();
  }, [])


  const handleFetch = async () => {
    setContacts(await api.getContacts());
  }

  const handleDelete = async (id) => {
      //warning message
      swal({
        title: "Are you sure?",
        text: "Are you sure you want to delete this contact?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((result) => {
        if (!result.isConfirmed) {
            api.deleteContact(id);
            const newContacts = contacts.filter((contact) => contact.id !== id);
            setContacts(newContacts);
        }
      })
 
    };

  const handleCreate = async ( props ) => {
      let newContact = await api.addContact(props);
      const newContacts = newContact? [...contacts, newContact] : contacts;
      setContacts(newContacts);
    };

  const handleUpdate = async ( props )=> {
      const newContacts = await Promise.all(
          contacts.map( async (contact) => {
              if (contact.id === props.id)
                contact = await api.updateContact(props);
              return contact;
          }));    
      setContacts(newContacts);
  };

  return (
    <div className="contacts-container">
        {contacts.map((contact, _) => {
            console.log(contact);
            return (
              <Contact key={contact.id} 
                contact={contact}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                />)
        })}
        <NewContact 
          handleCreate= {handleCreate}
          />
    </div>
  );
}


export default ContactsContainer;
