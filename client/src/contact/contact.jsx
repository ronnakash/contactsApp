import React, {useState} from 'react';
import '../App.css';
import './contact.css'
import ContactDisplay from './contactDisplay';
import EditingContact from './contactEdit';

const Contact = ( {contact}) => {
    
    const [isEditing, setIsEditing] = useState(false);

    if (!isEditing) {
        return (<ContactDisplay
            id={contact.id}
            image={contact.image}    
            title={contact.title} 
            name={contact.name} 
            location={contact.location} 
            company={contact.company} 
            address={contact.address} 
            phone={contact.phone} 
            setIsEditing={setIsEditing}
        />)
    }
    
    return (
        <EditingContact 
        id={contact.id}
        image={contact.image}    
        title={contact.title} 
        name={contact.name} 
        company={contact.company} 
        address={contact.address} 
        phone={contact.phone} 
        />
    );
  }
  
  export default Contact;
  